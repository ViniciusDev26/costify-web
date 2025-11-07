import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CurrencyInput } from "@/components/ui/currency-input";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRegisterIngredient } from "@/hooks/use-ingredients-query";
import { useUnits } from "@/hooks/use-units-query";
import {
	type CreateIngredientInput,
	CreateIngredientSchema,
} from "../schemas/create-ingredient.schema";

interface IngredientFormProps {
	onSuccess?: () => void;
}

export function IngredientForm({ onSuccess }: IngredientFormProps) {
	const { data: unitsData } = useUnits();
	const {
		mutateAsync: registerIngredient,
		isPending,
		error,
	} = useRegisterIngredient();
	const { register, handleSubmit, control, reset } = useForm({
		resolver: zodResolver(CreateIngredientSchema),
	});

	const units = useMemo(() => {
		const units = unitsData?.map((unit) => unit.name);
		return units ?? [];
	}, [unitsData]);

	async function onSubmit(data: CreateIngredientInput) {
		await registerIngredient(data);
		reset();
		onSuccess?.();
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
			<InputGroup>
				<Label htmlFor="name">Nome do ingrediente</Label>
				<Input id="name" {...register("name")} />
			</InputGroup>

			<InputGroup>
				<Label htmlFor="price">Preço do pacote</Label>
				<Controller
					name="packagePrice"
					control={control}
					render={({ field }) => (
						<CurrencyInput
							id="price"
							value={field.value as number}
							onChange={field.onChange}
						/>
					)}
				/>
			</InputGroup>

			<InputGroup>
				<Label>Quantidade de conteúdo do pacote</Label>
				<Input type="number" step="0.01" {...register("packageQuantity")} />
			</InputGroup>

			<InputGroup>
				<Label>Unidade de medida do pacote</Label>
				<Controller
					name="packageUnit"
					control={control}
					render={({ field }) => (
						<Select onValueChange={field.onChange} value={field.value}>
							<SelectTrigger>
								<SelectValue placeholder="Selecione a unidade" />
							</SelectTrigger>
							<SelectContent>
								{units?.map((un) => (
									<SelectItem key={un} value={un}>
										{un}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
			</InputGroup>

			{error && (
				<p className="text-sm text-destructive">
					Erro ao cadastrar ingrediente: {(error as any)?.message ?? "erro desconhecido"}
				</p>
			)}

			<Button type="submit" disabled={isPending}>
				{isPending ? "Cadastrando..." : "Cadastrar ingrediente"}
			</Button>
		</form>
	);
}
