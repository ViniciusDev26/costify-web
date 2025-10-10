import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ingredientsQueries } from "@/api/costify/queries/ingredients";

export const INGREDIENTS_QUERY_KEYS = {
	all: ["ingredients"] as const,
};

export function useRegisterIngredient() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ingredientsQueries.registerIngredient,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: INGREDIENTS_QUERY_KEYS.all });
		},
	});
}
