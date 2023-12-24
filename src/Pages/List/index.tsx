import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../assets/context/AuthContext";
import { AddSvg, CheckedSvg, DeleteSvg } from "./data";
import axios from "axios";

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
  const { token, username, login, logout } = useAuth();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState("");
  const uncompletedTodos = todos.filter((item) => item.completed_at === null);

  const [filteredTodos, setFilteredTodos] = useState([]);
  const [tabStatus, setTabStatus] = useState("全部");

  // 取得todo
  const InitList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/todos`, {
        headers: {
          authorization: token,
        },
      });
      console.log(response);
      setTodos(response.data.todos);
      setFilteredTodos(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  // 渲染畫面
  useEffect(() => {
    const RenderList = async () => {
      await InitList();
    };
    RenderList();
  }, []);

  // 組成Todo元件
  const todoItem = filteredTodos.map((item) => {
    // 刪除todo
    const handleDeleteTodo = async () => {
      try {
        const response = await axios.delete(
          `${apiUrl}/todos/${item.id}`,
          {
            headers: {
              authorization: token,
            },
          },
          {
            todo: {
              id: item.id,
            },
          }
        );
        console.log(response);
        InitList();
      } catch (error) {
        console.log(error);
      }
    };

    // 更改todo狀態
    const handleMarkCompleted = async () => {
      try {
        const response = await axios.patch(
          `${apiUrl}/todos/${item.id}/toggle`,
          {},
          {
            headers: {
              authorization: token,
            },
          }
        );
        console.log(response);
        InitList();
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Todo key={item.id}>
        <li>
          {item.completed_at ? (
            <>
              <div onClick={handleMarkCompleted}>{CheckedSvg}</div>
              <div className="completed">{item.content}</div>
            </>
          ) : (
            <>
              <input type="checkbox" onClick={handleMarkCompleted} />
              <div>{item.content}</div>
            </>
          )}
          <a onClick={handleDeleteTodo}>{DeleteSvg}</a>
        </li>
      </Todo>
    );
  });

  // 新增todo
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
      InitList();
      setAdd("");
    } catch (error) {
      console.log(error);
    }
  };

  // 篩選todo狀態
  const TabContainer = () => {
    const tabs = ["全部", "待完成", "已完成"];

    const handleSelectStatus = (props: string) => {
      setTabStatus((prevStatus) => {
        filterTodos(props);
        return props;
      });
    };

    const filterTodos = (status: string) => {
      switch (status) {
        case "全部":
          setFilteredTodos(todos);
          break;
        case "待完成":
          setFilteredTodos(todos.filter((item) => item.completed_at === null));
          break;
        case "已完成":
          setFilteredTodos(todos.filter((item) => item.completed_at !== null));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    return (
      <ListTab>
        {tabs.map((item, index) => {
          return (
            <li
              key={index}
              className={tabStatus === item ? "selected" : ""}
              onClick={() => handleSelectStatus(item)}
            >
              {item}
            </li>
          );
        })}
      </ListTab>
    );
  };

  // 清除所有已完成項目
  const handleDeleteDone = async () => {
    const doneList = todos.filter((item) => item.completed_at !== null);

    try {
      await Promise.all(
        doneList.map(async (item) => {
          await axios.delete(
            `${apiUrl}/todos/${item.id}`,
            {
              headers: {
                authorization: token,
              },
            },
            {
              todo: {
                id: item.id,
              },
            }
          );
        })
      );
      InitList();
    } catch (error) {
      console.log(error);
    }
  };

  // 登出
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
          <UserName>{username}的待辦</UserName>
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
            <TabContainer />
            <TodoCard>
              {todoItem}
              <TodoStatus>
                <div>{uncompletedTodos.length} 個待完成項目</div>
                <button type="button" onClick={() => handleDeleteDone()}>
                  清除已完成項目
                </button>
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
