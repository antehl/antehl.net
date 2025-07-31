import type { SafeParseReturnType, z } from "astro/zod";

export const parseFormData = <T>(
	formData: FormData,
	structure: z.ZodType<T>
): SafeParseReturnType<any, T> => structure.safeParse(Object.fromEntries(formData));
