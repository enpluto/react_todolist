export const apiUrl: string = "https://todoo.5xcamp.us";

export type Data = {
  componentName: string;
  labelFor: string;
  title: string;
  inputType: string;
  inputName: string;
  placeholder: string;
};

export const dataset: Data[] = [
  {
    componentName: "Email",
    labelFor: "email",
    title: "Email",
    inputType: "email",
    inputName: "email",
    placeholder: "請輸入Email",
  },
  {
    componentName: "UserName",
    labelFor: "username",
    title: "您的暱稱",
    inputType: "text",
    inputName: "username",
    placeholder: "請輸入暱稱",
  },
  {
    componentName: "Password",
    labelFor: "password",
    title: "密碼",
    inputType: "password",
    inputName: "password",
    placeholder: "請輸入密碼",
  },
  {
    componentName: "CheckPassword",
    labelFor: "checkPassword",
    title: "再次輸入密碼",
    inputType: "password",
    inputName: "checkPassword",
    placeholder: "請再次輸入密碼",
  },
];
