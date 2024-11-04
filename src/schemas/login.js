import * as yup from "yup";

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, "نام کاربری حداقل باید از ۴ حرف تشکیل شده باشد.")
        .max(64, "نام کاربری می‌تواند از ۶۴ حرف تشکیل شود.")
        .matches(/^[A-z0-9_\-.]+$/,
            "نام کاربری فقط می‌تواند شامل حروف بزرگ و کوچک لاتینءاعداد و کاراکترهای (ـ-.) می‌باشد")
        .required("نام کاربری اجباری است."),
    password: yup.string().required("رمز عبور اجباری است"),
});

export {loginSchema};