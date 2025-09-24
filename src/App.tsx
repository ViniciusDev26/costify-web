import { Switch } from "./components/ui/switch";
import { useThemeStore } from "./stores/theme/store";

function App() {
	const { theme, toggleTheme } = useThemeStore();

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="flex-col gap-4">
				<p>COSTIFY</p>
				<Switch checked={theme === "DARK"} onClick={toggleTheme} />
			</div>
		</div>
	);
}

export default App;
