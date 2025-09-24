import { useEffect } from "react";
import { useTheme } from "./store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = useTheme((s) => s.theme);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");

		root.classList.add(theme);
	}, [theme]);

	return <>{children}</>;
}
