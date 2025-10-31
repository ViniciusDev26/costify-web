import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/page";
import { IngredientsPage } from "@/pages/ingredients/page";
import IngredientsListPage from "@/pages/ingredients/list/page";
import RecipesListPage from "@/pages/recipes/page";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: HomePage
	},
	{
		path: "/ingredients",
		Component: IngredientsPage,
	},
	{
    path: "/ingredients/list",
    Component: IngredientsListPage,
  	},
  	{
    path: "/recipes",
    Component: RecipesListPage,
  	},
]);
