import { z } from "zod";

// Define the schema
export const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be under 50 characters"),

  description: z
    .string()
    .min(5, "Description must be at least 5 characters")
    .max(1000, "Description must be under 1000 characters"),

  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(20, "Category must be under 20 characters"),

  // link: z
  //   .string()
  //   .url("Must be a valid URL")
  //   .refine(
  //     async (url) => {
  //       try {
  //         const res = await fetch(url, { method: "HEAD" });
  //         const contentType = res.headers.get("content-type");
  //         return contentType?.startsWith("image/");
  //       } catch {
  //         return false;
  //       }
  //     },
  //     {
  //       message: "Link must point to a valid image URL",
  //     }
  //   ),

  details: z
    .string()
    .min(10, "Details must be at least 10 characters"),
});
