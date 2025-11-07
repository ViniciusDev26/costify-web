import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/page";
import IngredientsListPage from "@/pages/ingredients/list/page";
import RecipesListPage from "@/pages/recipes/page";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: HomePage
	},
	{
		path: "/ingredients",
		Component: IngredientsListPage,
	},
  	{
    path: "/recipes",
    Component: RecipesListPage,
  	},
]);
