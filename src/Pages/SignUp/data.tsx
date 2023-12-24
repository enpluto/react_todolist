export const apiUrl: string = "https://todoo.5xcamp.us";

export type Data = {
  componentName: string;
  labelFor: string;
  title: string;
  inputType: string;
  inputName: string;
  placeholder: string;
  validation?: ValidationRule;
};

export type ValidationRule = {
  required: { value: boolean; message: string };
  pattern?: { value: any; message: string };
  minLength?: { value: number; message: string };
  // validate?:
  // { value: number; message: string };
  // (value: string, allInputValues?: Record<string, string>) => boolean | string;
};

export const dataset: Data[] = [
  {
    componentName: "Email",
    labelFor: "email",
    title: "Email",
    inputType: "email",
    inputName: "email",
    placeholder: "請輸入Email",
    validation: {
      required: { value: true, message: "此欄位不可為空" },
      pattern: { value: /^s+@s+$/i, message: "信箱格式錯誤" },
    },
  },
  {
    componentName: "UserName",
    labelFor: "username",
    title: "您的暱稱",
    inputType: "text",
    inputName: "username",
    placeholder: "請輸入暱稱",
    validation: {
      required: { value: true, message: "此欄位不可為空" },
    },
  },
  {
    componentName: "Password",
    labelFor: "password",
    title: "密碼",
    inputType: "password",
    inputName: "password",
    placeholder: "請輸入密碼",
    validation: {
      required: { value: true, message: "此欄位不可為空" },
      minLength: { value: 6, message: "密碼至少需要6個字符" },
    },
  },
  {
    componentName: "CheckPassword",
    labelFor: "checkPassword",
    title: "再次輸入密碼",
    inputType: "password",
    inputName: "checkPassword",
    placeholder: "請再次輸入密碼",
    validation: {
      required: { value: true, message: "此欄位不可為空" },
      // validate: (
      //   checkPassword: string,
      //   allInputValues?: Record<string, string>
      // ) => {
      //   if (allInputValues) {
      //     return checkPassword === allInputValues.password || "與密碼不一致";
      //   }
      //   return false;
      // },
    },
  },
];
