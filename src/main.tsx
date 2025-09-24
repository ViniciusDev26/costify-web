import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { ThemeEffect } from "./stores/theme/effect.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeEffect />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
