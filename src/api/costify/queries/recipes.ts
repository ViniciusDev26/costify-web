import { client } from "../client";
import type { RecipesListResponse } from "./recipes.types";

export async function listRecipes() {
   const { data } = await client.get<RecipesListResponse>("/api/recipes");
   return data;
}
