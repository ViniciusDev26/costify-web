import { useQuery } from "@tanstack/react-query";
import { listRecipes } from "@/api/costify/queries/recipes";

export function useRecipesList() {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: () => listRecipes(),
  });
}
