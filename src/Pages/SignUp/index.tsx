import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Data, dataset, apiUrl } from "./data";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Email,
  UserName,
  Password,
  CheckPassword,
  Button,
  Login,
} from "./styled";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  interface FormInput {
    email: string;
    username: string;
    password: string;
    checkPassword: string;
  }

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      await axios.post(`${apiUrl}/users`, {
        user: {
          email: data.email,
          nickname: data.username,
          password: data.password,
        },
      });
      alert("註冊成功！");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // 動態生成元件
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    Email,
    UserName,
    Password,
    CheckPassword,
  };
  const initComponents = dataset.map(
    (
      {
        componentName,
        labelFor,
        title,
        inputType,
        inputName,
        placeholder,
        validation,
      }: Data,
      index: number
    ) => {
      const Component = componentMap[componentName];
      if (!Component) {
        return null;
      }
      return (
        <Component key={index}>
          <label htmlFor={labelFor}>{title}</label>
          <Input
            type={inputType}
            placeholder={placeholder}
            {...register(
              inputName as "username" | "email" | "password" | "checkPassword",
              validation
            )}
          />
          {errors[inputName as keyof FormInput] && (
            <span className="hint">
              {errors[inputName as keyof FormInput]?.message}
            </span>
          )}
        </Component>
      );
    }
  );

  return (
    <Wrapper>
      <Title>註冊帳號</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {initComponents}
        <Button type="submit">註冊帳號</Button>
      </Form>
      <Login onClick={() => navigate(-1)}>登入</Login>
    </Wrapper>
  );
};

export default SignUp;
