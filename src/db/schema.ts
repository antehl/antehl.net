import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const comment = sqliteTable("comment", {
  id: int().primaryKey({ autoIncrement: true }),
  author: text().notNull(),
  author_ip: text().notNull(),
  body: text().notNull(),
  created_at: text().notNull().default(sql`(current_timestamp)`)
});
