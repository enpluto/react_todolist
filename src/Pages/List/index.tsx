import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState("");
  const uncompletedTodos = todos.filter((item) => item.completed_at === null);

  useEffect(() => {
    const InitList = async () => {
      try {
        const response = await axios.get(`${apiUrl}/todos`, {
          headers: {
            authorization: token,
          },
        });
        console.log(response);
        setTodos(response.data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    InitList();
  }, []);

  const todoItem = todos.map((item) => {
    return (
      <Todo key={item.id}>
        <li>
          <input type="checkbox" />
          <div>{item.content}</div>
          <a>{DeleteSvg}</a>
        </li>
      </Todo>
    );
  });

  const handleAddTodo = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/todos`,
        {
          todo: {
            content: add,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response);
      const addTodo = { content: add, completed_at: null };
      setTodos([addTodo, ...todos]);
      setAdd("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Wrapper>
      <NavBar>
        <Logo>
          <img src="/src/assets/images/check.svg" alt="Logo" />
          <h1>ONLINE TODO LIST</h1>
        </Logo>
        <Admin>
          <UserName>的待辦</UserName>
          <Logout type="button" onClick={handleLogout}>
            登出
          </Logout>
        </Admin>
      </NavBar>
      <ListContainer>
        <ListInput>
          <input
            type="text"
            placeholder="新增待辦事項"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <div onClick={handleAddTodo}>{AddSvg}</div>
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
                <div>{uncompletedTodos.length} 個待完成項目</div>
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
