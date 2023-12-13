import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styled";

const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <img src="/src/assets/images/logo.png" alt="logo" width="313" />
        <img
          src="/src/assets/images/login.png"
          className="login-bg"
          alt="login image"
          width="386"
        />
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
