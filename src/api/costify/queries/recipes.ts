import { client } from "../client";
import type { CreateRecipeInput, RecipesListResponse } from "./recipes.types";

export async function listRecipes() {
   const { data } = await client.get<RecipesListResponse>("/api/recipes");
   return data;
}

export async function registerRecipe(input: CreateRecipeInput) {
  const { data } = await client.post("/api/recipes", input);
  return data;
}
