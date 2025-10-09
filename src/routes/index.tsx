import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/home/page";
import { IngredientsPage } from "@/pages/ingredients/page";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: HomePage
	},
	{
		path: "/ingredients",
		Component: IngredientsPage,
	},
]);
