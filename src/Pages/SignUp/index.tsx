import { useNavigate } from "react-router-dom";
import { Data, dataset } from "./data";
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
  const navigate = useNavigate();
  // 動態生成元件
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    Email,
    UserName,
    Password,
    CheckPassword,
  };

  return (
    <Wrapper>
      <Title>註冊帳號</Title>
      <Form>
        {dataset.map(
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
                />
              </Component>
            );
          }
        )}
      </Form>
      <Container>
        <Button type="button">註冊帳號</Button>
        <Login onClick={() => navigate(-1)}>登入</Login>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
