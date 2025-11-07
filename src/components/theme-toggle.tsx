import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeStore } from "@/stores/theme/store";

export function ThemeToggle() {
	const { theme, toggleTheme } = useThemeStore();

	return (
		<Button
			onClick={toggleTheme}
			size="icon"
			className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
			aria-label="Toggle theme"
		>
			{theme === "DARK" ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
		</Button>
	);
}
