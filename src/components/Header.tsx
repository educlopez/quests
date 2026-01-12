import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { playNextSound } from "@/hooks/use-sound";
import MainMenu from "./ui/8bit/blocks/main-menu";
import { Button } from "./ui/8bit/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "./ui/8bit/dialog";

export default function Header() {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleOpenMenu = () => {
		playNextSound();
		setMenuOpen(true);
	};

	if (location.pathname === "/") {
		return null;
	}

	return (
		<header className="px-6.5 pt-8 flex items-center justify-between">
			<Link to="/" className="retro text-sm ">
				&lt;dev_quests&gt;
			</Link>

			<Dialog open={menuOpen} onOpenChange={setMenuOpen}>
				<Button
					variant="outline"
					size="sm"
					onClick={handleOpenMenu}
					className="retro-hover-effect"
				>
					Menu
				</Button>

				<DialogContent className="sm:max-w-md border-y-none">
					<DialogHeader className="sr-only">
						<DialogTitle>Menu</DialogTitle>
					</DialogHeader>

					<MainMenu onClose={() => setMenuOpen(false)} />
				</DialogContent>
			</Dialog>
		</header>
	);
}
