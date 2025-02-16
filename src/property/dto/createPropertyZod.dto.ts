import { z } from 'zod';

export const createPropertySchema = z
  .object({
    name: z.string(),
    description: z.string().min(5),
    area: z.number().gt(0, { message: 'Area must be greater than 0' }),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
