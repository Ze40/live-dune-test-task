import z from "zod";

import { passwordRegex } from "@/utils/regex";

export const RegisterSchema = z.object({
  name: z.string().min(2, "Имя обязательно"),
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
  promo: z.string().optional(),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
