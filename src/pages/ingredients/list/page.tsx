import { ArrowLeft, Plus, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useIngredientsList } from "@/hooks/use-ingredients-query";
import { IngredientForm } from "../components/ingredient-form";

const currency = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export default function IngredientsListPage() {
	const [open, setOpen] = useState(false);
	const { data, isLoading, isError, error, refetch, isRefetching } =
		useIngredientsList();

	return (
		<div className="mx-auto max-w-4xl p-6">
			<div className="mb-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Button variant="outline" size="icon" asChild>
						<Link to="/">
							<ArrowLeft />
						</Link>
					</Button>
					<h1 className="text-2xl font-semibold">Ingredientes</h1>
				</div>
				<div className="flex gap-2">
					<Button
						onClick={() => refetch()}
						variant="outline"
						disabled={isRefetching}
					>
						<RefreshCw className={isRefetching ? "animate-spin" : ""} />
						{isRefetching ? "Atualizando..." : "Atualizar"}
					</Button>
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<Button>
								<Plus />
								Cadastrar ingrediente
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Cadastrar novo ingrediente</DialogTitle>
							</DialogHeader>
							<IngredientForm onSuccess={() => setOpen(false)} />
						</DialogContent>
					</Dialog>
				</div>
			</div>

			{isLoading ? (
				<p>Carregando...</p>
			) : isError ? (
				<Alert variant="destructive">
					<AlertDescription>
						Falha ao carregar ingredientes: {error?.message}
					</AlertDescription>
				</Alert>
			) : !data || data.length === 0 ? (
				<Alert>
					<AlertDescription>
						Nenhum ingrediente cadastrado. Quer criar agora?{" "}
						<button
							onClick={() => setOpen(true)}
							className="underline font-medium hover:text-primary"
						>
							Cadastrar ingrediente
						</button>
					</AlertDescription>
				</Alert>
			) : (
				<div className="overflow-x-auto rounded border">
					<table className="min-w-full text-left text-sm">
						<thead className="border-b bg-gray-50 text-gray-700">
							<tr>
								<th className="px-4 py-2">Nome</th>
								<th className="px-4 py-2">Pacote</th>
								<th className="px-4 py-2">Preço do pacote</th>
								<th className="px-4 py-2">Custo unitário</th>
							</tr>
						</thead>
						<tbody>
							{data.map((ing) => (
								<tr key={ing.id} className="border-b last:border-0">
									<td className="px-4 py-2">{ing.name}</td>
									<td className="px-4 py-2">
										{ing.packageQuantity} {ing.packageUnit}
									</td>
									<td className="px-4 py-2">
										{currency.format(ing.packagePrice)}
									</td>
									<td className="px-4 py-2">
										{typeof ing.unitCost === "number"
											? currency.format(ing.unitCost)
											: "—"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
