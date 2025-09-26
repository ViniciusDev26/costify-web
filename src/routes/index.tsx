import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/home/page";
import { IngredientsPage } from "@/pages/ingredients/page";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/ingredients",
		Component: IngredientsPage,
	},
]);
