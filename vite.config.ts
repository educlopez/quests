import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
	plugins: [
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
		nitro(),
	],
	ssr: {
		noExternal: ["@prisma/client", "prisma", "pg"],
	},
	optimizeDeps: {
		exclude: ["@prisma/client", "prisma", "pg"],
	},
});

export default config;
