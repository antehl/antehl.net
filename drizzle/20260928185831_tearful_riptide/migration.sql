CREATE TABLE `comment` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`author` text NOT NULL,
	`author_ip` text NOT NULL,
	`body` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
