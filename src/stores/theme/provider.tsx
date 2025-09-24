import { useEffect } from "react";
import { useThemeStore } from "./store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = useThemeStore((s) => s.theme);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");

		root.classList.add(theme.toLocaleLowerCase());
	}, [theme]);

	return <>{children}</>;
}
