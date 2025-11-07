export type RecipeListItem = {
  id: string;
  name: string;
  totalCost?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type RecipesListResponse = RecipeListItem[];

// ===== Cadastro =====
export type RecipeIngredientInput = {
  ingredientId: string;
  quantity: number;
  unit: string;
};

export type CreateRecipeInput = {
  name: string;
  ingredients: RecipeIngredientInput[];
};
