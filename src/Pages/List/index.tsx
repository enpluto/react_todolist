import { useState } from "react";
import {
  Wrapper,
  NavBar,
  Logo,
  Admin,
  UserName,
  Logout,
  ListContainer,
  ListInput,
  TodoContainer,
  ListTab,
  TodoCard,
  Todo,
  TodoStatus,
  Empty,
} from "./styled";
import { AddSvg, CheckedSvg, DeleteSvg } from "./data";

const List = () => {
  const todos: string[] = ["把冰箱發霉的檸檬拿去丟", "打電話叫媽媽匯款給我"];
  // const todos: string[] = [];

  const todoItem = todos.map((item, index) => {
    return (
      <Todo key={index + item}>
        <li>
          <input type="checkbox" />
          <div>{item}</div>
          <a>{DeleteSvg}</a>
        </li>
      </Todo>
    );
  });

  return (
    <Wrapper>
      <NavBar>
        <Logo>
          <img src="/src/assets/images/check.svg" alt="Logo" />
          <h1>ONLINE TODO LIST</h1>
        </Logo>
        <Admin>
          <UserName>的待辦</UserName>
          <Logout type="button">登出</Logout>
        </Admin>
      </NavBar>
      <ListContainer>
        <ListInput>
          <input type="text" placeholder="新增待辦事項" />
          {AddSvg}
        </ListInput>
        {todos.length > 0 ? (
          <TodoContainer>
            <ListTab>
              <li>全部</li>
              <li>待完成</li>
              <li>已完成</li>
            </ListTab>
            <TodoCard>
              {todoItem}
              <TodoStatus>
                <div>5 個待完成項目</div>
                <button type="button">清除已完成項目</button>
              </TodoStatus>
            </TodoCard>
          </TodoContainer>
        ) : (
          <Empty>
            <div>目前尚無待辦事項</div>
            <img src="src/assets/images/empty.png" alt="empty" width="240" />
          </Empty>
        )}
      </ListContainer>
    </Wrapper>
  );
};

export default List;
