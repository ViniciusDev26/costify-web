import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { UnitArray } from "@/domain/unit";
import {
	type CreateIngredientInput,
	CreateIngredientSchema,
} from "./schemas/create-ingredient.schema";

export function IngredientsPage() {
	const { register, handleSubmit, control } = useForm({
		resolver: zodResolver(CreateIngredientSchema),
	});

	function onSubmit(data: CreateIngredientInput) {
		console.log(data);
	}

	return (
		<div className="w-full h-screen flex items-center justify-center gap-2">
			<form
				className="flex flex-col gap-2"
				onSubmit={handleSubmit(onSubmit, onSubmit)}
			>
				<InputGroup>
					<Label htmlFor="name">Nome do ingrediente</Label>
					<Input id="name" {...register("name")} />
				</InputGroup>

				<InputGroup>
					<Label htmlFor="price">Preço do ingrediente</Label>
					<Input id="price" type="number" {...register("price")} />
				</InputGroup>

				<InputGroup>
					<Label>Quantidade de conteúdo do pacote</Label>
					<Input type="number" {...register("packageQuantity")} />
				</InputGroup>

				<InputGroup>
					<Label>Unidade de medida do pacote</Label>
					<Controller
						name="packageUnit"
						control={control}
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger>
									<SelectValue placeholder="Unidade" />
								</SelectTrigger>
								<SelectContent>
									{UnitArray.map((un) => (
										<SelectItem key={un} value={un}>
											{un}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/>
				</InputGroup>
				<Button type="submit">Register</Button>
			</form>
		</div>
	);
}
