import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 102px;

  @media (max-width: 376px) {
    flex-direction: column;
    row-gap: 16px;

    .login-bg {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  margin-top: 87px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-family: "Baloo Thambi 2";
  font-size: 32px;
  font-weight: 700;
`;
