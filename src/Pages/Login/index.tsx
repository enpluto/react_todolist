import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const apiUrl: string = "https://todoo.5xcamp.us";

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(`${apiUrl}/users/sign_in`, {
        user: { email: email, password: password },
      });
      console.log(response);

      const token: string = response.headers.authorization;
      const username: string = response.data.nickname;

      login(token, username);
      navigate("/list");
    } catch (error) {
      console.log(error);
      alert("信箱或密碼不正確");
      setPassword("");
    }
  };
  return (
    <Wrapper>
      <Title>最實用的線上待辦事項服務</Title>
      <Form>
        <Email>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="請輸入Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Email>
        <Password>
          <label htmlFor="password">密碼</label>
          <Input
            type="password"
            name="password"
            placeholder="請輸入密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Password>
        <Button type="submit" onClick={handleButtonClick}>
          登入
        </Button>
      </Form>
      <SignUp onClick={() => navigate(`/signup`)}>註冊帳號</SignUp>
    </Wrapper>
  );
};

export default Login;
