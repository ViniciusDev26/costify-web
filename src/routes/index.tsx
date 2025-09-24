import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/home/page";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
]);
