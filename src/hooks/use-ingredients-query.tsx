import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { registerIngredient, listIngredients } from "@/api/costify/queries/ingredients";
import type { CreateIngredientInput } from "@/api/costify/queries/ingredients.types";

export function useRegisterIngredient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateIngredientInput) => registerIngredient(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["ingredients"] });
    },
  });
}

export function useIngredientsList() {
  return useQuery({
    queryKey: ["ingredients"],
    queryFn: () => listIngredients(),
  });
}
