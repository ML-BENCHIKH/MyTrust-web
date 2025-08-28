// lib/validators.ts
import { z } from "zod";

// Newsletter form schema
export const NewsletterFormSchema = z.object({
  email: z.string().email("Adresse email invalide !"),
});

// Inferred TypeScript type from the schema
export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>;
