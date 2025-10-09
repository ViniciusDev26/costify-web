import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Switch } from "../../components/ui/switch";
import { useThemeStore } from "../../stores/theme/store";

export function Home() {
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

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <Home />
      <Link to="/ingredients">
        <Button>
          Gerenciar Ingredientes
        </Button>
      </Link>
    </div>
  );
}