import {
  Wrapper,
  Title,
  Email,
  Password,
  Input,
  Container,
  Button,
  SignUp,
} from "./styled";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>最實用的線上待辦事項服務</Title>
      <Email>
        <div>Email</div>
        <Input type="email" placeholder="請輸入Email" />
      </Email>
      <Password>
        <div>密碼</div>
        <Input type="password" placeholder="請輸入密碼" />
      </Password>
      <Container>
        <Button type="button">登入</Button>
        <SignUp onClick={() => navigate(`/signup`)}>註冊帳號</SignUp>
      </Container>
    </Wrapper>
  );
};

export default Login;
