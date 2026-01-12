import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
	useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Analytics } from "@vercel/analytics/next";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { CrtOverlay } from "@/components/ui/8bit/crt-overlay";
import { RetroParticles } from "@/components/ui/8bit/retro-particles";
import Header from "../components/Header";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "dev_quests",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	component: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const location = useLocation();
		return (
			<NuqsAdapter>
				<div key={location.pathname} className="retro-page-transition">
					<Outlet />
				</div>
			</NuqsAdapter>
		);
	},

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="dark">
				<CrtOverlay />
				<RetroParticles />
				<Header />
				{children}

				<Scripts />
				<Analytics />
			</body>
		</html>
	);
}
