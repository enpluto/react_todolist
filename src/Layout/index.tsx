import { Outlet } from "react-router-dom";
import { Container, Wrapper, Logo } from "./styled";

const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <img src="/src/assets/images/check.svg" alt="Logo" />
          <div>ONLINE TODO LIST</div>
        </Logo>
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
