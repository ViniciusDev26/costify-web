import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/index.tsx";
import { ThemeEffect } from "./stores/theme/effect.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeEffect />
		<RouterProvider router={router} />
	</StrictMode>,
);
