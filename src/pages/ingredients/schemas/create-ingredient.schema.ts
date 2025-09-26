import { z } from "zod";
import { UnitArray } from "@/domain/unit";

export const CreateIngredientSchema = z.object({
	name: z.string().min(1, "Name is required"),
	packageQuantity: z.coerce
		.number()
		.min(0.01, "Package quantity must be greater than 0"),
	packageUnit: z.enum(UnitArray),
	price: z.coerce.number().min(0.01, "Price must be greater than 0"),
});
export type CreateIngredientInput = z.infer<typeof CreateIngredientSchema>;
