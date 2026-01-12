import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
	useLocation,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { CrtOverlay } from "@/components/ui/8bit/crt-overlay";
import { RetroParticles } from "@/components/ui/8bit/retro-particles";
import Header from "../components/Header";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

const siteConfig = {
	title: "Dev Quests - Level Up Your Portfolio",
	description:
		"Discover creative coding project ideas to boost your developer portfolio. From weekend builds to month-long challenges across all skill levels.",
	url: "https://dev-quests.vercel.app/",
	image: "/hero.png",
	twitterHandle: "@kapish_dima",
};

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
				title: siteConfig.title,
			},
			{
				name: "description",
				content: siteConfig.description,
			},
			{
				name: "author",
				content: "Dev Quests",
			},
			{
				name: "keywords",
				content:
					"developer projects, portfolio ideas, coding challenges, side projects, programming projects, web development, learn to code",
			},
			// Open Graph / Facebook
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:url",
				content: siteConfig.url,
			},
			{
				property: "og:title",
				content: siteConfig.title,
			},
			{
				property: "og:description",
				content: siteConfig.description,
			},
			{
				property: "og:image",
				content: `${siteConfig.url}${siteConfig.image}`,
			},
			{
				property: "og:image:width",
				content: "1200",
			},
			{
				property: "og:image:height",
				content: "630",
			},
			{
				property: "og:site_name",
				content: "Dev Quests",
			},
			{
				property: "og:locale",
				content: "en_US",
			},
			// Twitter
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:url",
				content: siteConfig.url,
			},
			{
				name: "twitter:title",
				content: siteConfig.title,
			},
			{
				name: "twitter:description",
				content: siteConfig.description,
			},
			{
				name: "twitter:image",
				content: `${siteConfig.url}${siteConfig.image}`,
			},
			{
				name: "twitter:creator",
				content: siteConfig.twitterHandle,
			},
			// Additional SEO
			{
				name: "robots",
				content: "index, follow",
			},
			{
				name: "theme-color",
				content: "#1a1a2e",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "canonical",
				href: siteConfig.url,
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png",
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
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
