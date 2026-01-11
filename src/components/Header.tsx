import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "./ui/8bit/button";

export default function Header() {
	const location = useLocation();

	if (location.pathname === "/") {
		return null;
	}

	return (
		<header className="px-6.5 pt-8 flex items-center justify-between">
			<Link to="/" className="retro text-sm ">
				&lt;dev_quests&gt;
			</Link>
			<div className="flex items-center gap-x-5">
				<Button variant="ghost" size="sm" asChild>
					<Link to="/quests-create">Create Quest</Link>
				</Button>
				<a
					href="https://github.com"
					target="_blank"
					rel="noreferrer"
					className="flex-1"
				>
					<Button variant="outline" className="w-full retro-hover-effect">
						GitHub
					</Button>
				</a>
				<a
					href="https://x.com/kapish_dima"
					target="_blank"
					rel="noreferrer"
					className="flex-1"
				>
					<Button variant="outline" className="w-full retro-hover-effect">
						X (Twitter)
					</Button>
				</a>
			</div>
		</header>
	);
}
