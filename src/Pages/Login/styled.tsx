import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  margin-top: 149px;
  width: 304px;

  font-size: 14px;
  font-weight: 700;

  @media (max-width: 376px) {
    margin-top: 8px;
    width: 311px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;

  @media (max-width: 375px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: 376px) {
    margin-top: 8px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Password = Email;

export const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  width: 100%;

  color: #9f9a91;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 376px) {
    max-width: 304px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 12px 48px;

  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`;

export const SignUp = styled.div`
  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`;
