import { db } from "../src";
import { comment } from "../src/db/schema";

await db.insert(comment).values([{ author: "turip", body: "ip ip ip", author_ip: "127.0.0.1" }]);
await db
	.insert(comment)
	.values([{ author: "usererrrer", body: "aaaaa", author_ip: "122.0.21.3" }]);
