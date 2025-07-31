import { column, defineDb, defineTable, NOW } from "astro:db";

const comment = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		author: column.text(),
		author_ip: column.text(),
		body: column.text(),
		created_at: column.date({ default: NOW }),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: { comment },
});
