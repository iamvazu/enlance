import { z } from "zod";

export const leadTypes = ["enquiry", "sample", "dealer", "tds"] as const;
export type LeadType = (typeof leadTypes)[number];

export const leadSchema = z.object({
  type: z.enum(leadTypes),
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{10,16}$/, "Enter a valid phone / WhatsApp number"),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  product: z.string().trim().max(120).optional().or(z.literal("")),
  application: z.string().trim().max(200).optional().or(z.literal("")),
  volume: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  page: z.string().max(300).optional(),
  attribution: z.record(z.string()).optional(),
  website: z.string().max(0).optional(), // honeypot — must stay empty
});

export type Lead = z.infer<typeof leadSchema>;
