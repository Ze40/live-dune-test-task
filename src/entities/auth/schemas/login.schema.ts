import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Возможно вы ошиблись в указании почтового сервиса"),
  password: z
    .string()
    .min(8, "Длина пароля должна быть больше 8 символов")
    .max(16, "Длина пароля должна быть меньше 16 символов")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      "Пароль должен содержать: 1 заглавную букву, 1 цифру и 1 спецсимвол"
    ),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
