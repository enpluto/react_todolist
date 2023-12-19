import { useState } from "react";
import { useAuth } from "../../assets/context/AuthContext";
import { AddSvg, CheckedSvg, DeleteSvg } from "./data";
import axios from "axios";

// "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MDAyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzAyOTY3NTU5LCJleHAiOjE3MDQyNjM1NTksImp0aSI6ImQyZmQxOGZiLWI0MjQtNGNhMC04ZDk5LTUzOTA5Y2U3NDkzNCJ9.sRlLcGmUuxByA1LfQ-PK7lwp-5J8nDmH_a5wUfy8JWI"

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

const List = () => {
  const apiUrl: string = "https://todoo.5xcamp.us";
  const { token, login, logout } = useAuth();
  const [todos, setTodos] = useState([]);

  const RenderList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/todos`, {
        headers: {
          authorization: token,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  RenderList();
  // function initTodo() {
  //   axios
  //     .get(`${apiUrl}/todos`, {
  //       headers: {
  //         authorization: token,
  //       },
  //     })
  //     .then(function (response) {
  //       response.data.todos.map((obj) => {
  //         let todoUnit = [];
  //         todoUnit.push(obj.content);
  //         todoUnit.push(obj.id);
  //         if (obj["completed_at"] === null) {
  //           todoUnit.push(false);
  //         } else {
  //           todoUnit.push(true);
  //         }
  //         todosArray.push(todoUnit);
  //       });
  //       renderTodos();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  // initTodo();

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
