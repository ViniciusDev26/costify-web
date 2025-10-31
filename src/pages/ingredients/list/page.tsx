import { Link } from "react-router-dom";
import { useIngredientsList } from "@/hooks/use-ingredients-query";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function IngredientsListPage() {
  const { data, isLoading, isError, error, refetch, isRefetching } =
    useIngredientsList();

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Ingredientes</h1>
        <div className="flex gap-2">
          <button
            onClick={() => refetch()}
            className="rounded border px-3 py-2 text-sm"
            disabled={isRefetching}
          >
            {isRefetching ? "Atualizando..." : "Atualizar"}
          </button>
          <Link
            to="/ingredients"
            className="rounded bg-black px-3 py-2 text-sm text-white"
          >
            Cadastrar ingrediente
          </Link>
        </div>
      </div>

      {isLoading ? (
        <p>Carregando...</p>
      ) : isError ? (
        <div className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Falha ao carregar ingredientes: {(error as any)?.message ?? "erro"}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded border border-gray-200 p-4">
          <p className="text-sm text-gray-700">Nenhum ingrediente cadastrado.</p>
          <p className="mt-2 text-sm">
            Quer criar agora?{" "}
            <Link to="/ingredients" className="underline">
              Cadastrar ingrediente
            </Link>
          </p>
        </div>
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
