import z from "zod";

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Почта обязательна")
    .email("Возможно вы ошиблись в указании почтового сервиса"),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
