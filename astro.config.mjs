// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import alpinejs from "@astrojs/alpinejs";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: node({
		mode: "standalone",
	}),
	integrations: [alpinejs(), db()],
	output: "server",
});
