/** biome-ignore-all lint/correctness/useHookAtTopLevel: this file is a query helper */
import { useQuery } from "@tanstack/react-query";
import { unitsQueries } from "@/api/costify/queries/units";

export function useUnitsQuery() {
	const keys = {
		all: ["units"] as const,
	};

	return {
		all: () => {
			return useQuery({
				queryKey: keys.all,
				queryFn: unitsQueries.getUnits,
			});
		},
	};
}
