import { useRecipesList } from "@/hooks/use-recipes-query";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function RecipesListPage() {
  const { data, isLoading, isError, error, refetch, isRefetching } =
    useRecipesList();

  const axiosStatus = (error as any)?.response?.status;
  const isNotFound = isError && (axiosStatus === 404 || axiosStatus === 405);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Receitas</h1>
        <button
          onClick={() => refetch()}
          className="rounded border px-3 py-2 text-sm"
          disabled={isRefetching}
        >
          {isRefetching ? "Atualizando..." : "Atualizar"}
        </button>
      </div>

      {isLoading ? (
        <p>Carregando...</p>
      ) : isNotFound ? (
        <div className="rounded border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800">
          A API de listagem de receitas (<code>GET /api/recipes</code>) parece
          não estar disponível ainda. A página já está pronta e passará a
          exibir os dados automaticamente quando o endpoint for exposto.
        </div>
      ) : isError ? (
        <div className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Falha ao carregar receitas: {(error as any)?.message ?? "erro"}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded border border-gray-200 p-4">
          <p className="text-sm text-gray-700">Nenhuma receita cadastrada.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded border">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Custo total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r) => (
                <tr key={r.id} className="border-b last:border-0">
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">
                    {typeof r.totalCost === "number"
                      ? currency.format(r.totalCost)
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
