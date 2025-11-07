import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { listRecipes, registerRecipe } from "@/api/costify/queries/recipes";
import type { CreateRecipeInput } from "@/api/costify/queries/recipes.types";

export function useRecipesList() {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: () => listRecipes(),
  });
}

export function useRegisterRecipe() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateRecipeInput) => registerRecipe(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["recipes"] });
    },
  });
}
