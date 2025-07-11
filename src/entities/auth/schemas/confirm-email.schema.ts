import z from "zod";

export const ConfirmEmailSchema = z.object({
  email: z
    .string()
    .min(1, "Почта обязательна")
    .email("Возможно вы ошиблись в указании почтового сервиса"),
});

export type ConfirmEmailSchemaType = z.infer<typeof ConfirmEmailSchema>;
