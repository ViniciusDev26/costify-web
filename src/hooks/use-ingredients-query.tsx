import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ingredientsQueries } from "@/api/costify/queries/ingredients";

const QUERY_KEYS = {
	all: ["ingredients"] as const,
};

export function useRegisterIngredient() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ingredientsQueries.registerIngredient,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.all });
		},
	});
}
