import { z } from "astro/zod";

export function assertRequest(request: Request, method: "GET" | "POST"): void;
export function assertRequest<T extends z.ZodRawShape>(
	request: Request,
	method: "POST",
	structure: T,
): Promise<{ [K in keyof T]: z.infer<T[K]> }>;
export function assertRequest<T extends z.ZodRawShape>(
	request: Request,
	method: "GET" | "POST",
	structure?: T,
) {
	if (request.method !== method) throw errors.method_not_allowed;

	try {
		if (!structure) return undefined;
		return request
			.formData()
			.then((formData) => z.object(structure).parse(Object.fromEntries(formData)));
	} catch {
		throw errors.invalid_body;
	}
}

export const errors = {
	method_not_allowed: new Response(null, { status: 405, statusText: "Method Not Allowed" }),
	invalid_body: new Response(null, { status: 422, statusText: "Invalid Request Body" }),
	internal: new Response(null, { status: 500, statusText: "Internal Server Error" }),
};
