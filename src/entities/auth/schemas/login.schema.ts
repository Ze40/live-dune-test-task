import z from "zod";

import { passwordRegex } from "@/utils/regex";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Почта обязательна")
    .email("Возможно вы ошиблись в указании почтового сервиса"),
  password: z
    .string()
    .min(1, "Пароль обязателен")
    .min(8, "Длина пароля должна быть больше 8 символов")
    .max(16, "Длина пароля должна быть меньше 16 символов")
    .regex(passwordRegex, "Пароль должен содержать буквы и цифры"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
