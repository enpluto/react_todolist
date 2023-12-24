import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;

  background: linear-gradient(
    173deg,
    #ffd370 5.12%,
    #ffd370 53.33%,
    #ffd370 53.44%,
    #fff 53.45%,
    #fff 94.32%
  );
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 33px 17px 33px;
  width: 100%;

  @media (max-width: 376px) {
    padding: 0 0 17px 0;
    max-width: 311px;
    margin: auto;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-top: 17px;

  font-family: "Baloo Thambi 2";
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const Admin = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;

  margin-top: 24px;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 376px) {
    display: none;
  }
`;

export const Logout = styled.button`
  font-size: 16px;

  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  width: 100%;
  max-width: 500px;
  margin: auto;

  @media (max-width: 376px) {
    max-width: 311px;
  }
`;

export const ListInput = styled.div`
  display: flex;
  position: relative;

  input {
    height: 47px;
    padding: 4px 16px;
    width: 100%;

    border: none;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);

    color: #9f9a91;
    font-size: 16px;
  }

  svg {
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

export const TodoContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const ListTab = styled.ul`
  display: flex;

  color: #9f9a91;
  font-size: 14px;
  font-weight: 700;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 2px solid #efefef;
    width: 100%;
    height: 51px;
    cursor: pointer;
  }
  .selected {
    color: black;
    border-bottom: 2px solid #000000;
  }
`;

export const TodoCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 24px;
`;

export const Todo = styled.ul`
  display: flex;
  column-gap: 16px;

  position: relative;

  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;

  font-size: 14px;

  li {
    display: flex;
    align-items: center;
    flex-grow: 1;
    column-gap: 16px;
  }
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  a {
    position: absolute;
    top: 0;
    right: -4px;
    opacity: 0;
  }
  li:hover a {
    opacity: 1;
  }
  .completed {
    text-decoration: line-through;
    color: #9f9a91;
  }
`;

export const TodoStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;

  button {
    cursor: pointer;
    color: #9f9a91;
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-top: 44px;
`;
