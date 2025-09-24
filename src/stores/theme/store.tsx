import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme, ThemeState } from "./types";

export function toggleTheme(theme: Theme) {
	return theme === "LIGHT" ? "DARK" : "LIGHT";
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			theme: "LIGHT",
			toggleTheme() {
				return set((state) => ({
					theme: toggleTheme(state.theme),
				}));
			},
		}),
		{
			name: "THEME",
		},
	),
);
