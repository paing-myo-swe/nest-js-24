import { z } from 'zod';

export const createPropertySchema = z
  .object({
    name: z.string().min(3).max(255),
    description: z.string().min(10).max(255),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
