import { client } from "../client";
import type { CreateIngredientInput } from "./ingredients.types";

async function registerIngredient(input: CreateIngredientInput) {
	const { data } = await client.post("/api/ingredients", input);
	return data;
}

export const ingredientsQueries = {
	registerIngredient,
};
