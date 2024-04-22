import { ModeToggle } from "@/components/mode-toggle";
import Translator from "@/components/translator";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <header className="h-[10vh] flex items-center justify-between px-4">
        <h1 className="text-xl font-semibold flex gap-2 text-zinc-600 dark:text-zinc-300">
          <Menu />
          Translator
        </h1>
        <ModeToggle />
      </header>
      <Separator />
      <main className="flex-1 flex items-center justify-center">
        <Translator />
      </main>
    </div>
  );
}
