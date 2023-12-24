import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../assets/context/AuthContext";
import axios from "axios";

import {
  Wrapper,
  Title,
  Form,
  Email,
  Password,
  Input,
  Button,
  SignUp,
} from "./styled";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const apiUrl: string = "https://todoo.5xcamp.us";
  interface FormInput {
    email: string;
    password: string;
  }
  const onSubmit: SubmitHandler<FormInput> = async (data, e) => {
    try {
      const response = await axios.post(`${apiUrl}/users/sign_in`, {
        user: { email: data.email, password: data.password },
      });
      const token: string = response.headers.authorization;
      const username: string = response.data.nickname;
      login(token, username);
      navigate("/list");
    } catch (error) {
      alert("信箱或密碼不正確");
      e.target.elements.password.value = "";
    }
  };
  return (
    <Wrapper>
      <Title>最實用的線上待辦事項服務</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Email>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="請輸入Email"
            {...register("email", {
              required: { value: true, message: "此欄位不可為空" },
            })}
          />
          {errors.email && <span className="hint">{errors.email.message}</span>}
        </Email>
        <Password>
          <label htmlFor="password">密碼</label>
          <Input
            type="password"
            placeholder="請輸入密碼"
            {...register("password", {
              required: { value: true, message: "此欄位不可為空" },
            })}
          />
          {errors.password && (
            <span className="hint">{errors.password.message}</span>
          )}
        </Password>
        <Button type="submit">登入</Button>
      </Form>
      <SignUp onClick={() => navigate(`/signup`)}>註冊帳號</SignUp>
    </Wrapper>
  );
};

export default Login;
