import { client } from "../client";
import type { CreateIngredientInput, IngredientsListResponse } from "./ingredients.types";

export async function registerIngredient(input: CreateIngredientInput) {
  const { data } = await client.post("/api/ingredients", input);
  return data;
}

export async function listIngredients() {
  const { data } = await client.get<IngredientsListResponse>("/api/ingredients");
  return data;
}
