export type RecipeListItem = {
  id: string;
  name: string;
  totalCost?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type RecipesListResponse = RecipeListItem[];
