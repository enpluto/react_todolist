import { useState } from "react";
import { useForm } from "react-hook-form";
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
  Container,
  Button,
  Login,
} from "./styled";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(`${apiUrl}/users`, {
        user: {
          email: email,
          nickname: username,
          password: password,
        },
      });
      console.log(response.data);
      alert("註冊成功！");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (prop: string, value: string) => {
    switch (prop) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "checkPassword":
        setCheckPassword(value);
        break;
      default:
        break;
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
            name={inputName}
            placeholder={placeholder}
            value={
              inputName === "email"
                ? email
                : inputName === "username"
                ? username
                : inputName === "password"
                ? password
                : checkPassword
            }
            onChange={(e) => handleInputChange(inputName, e.target.value)}
          />
        </Component>
      );
    }
  );

  return (
    <Wrapper>
      <Title>註冊帳號</Title>
      <Form>{initComponents}</Form>
      <Container>
        <Button type="button" onClick={handleButtonClick}>
          註冊帳號
        </Button>
        <Login onClick={() => navigate(-1)}>登入</Login>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
