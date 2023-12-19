import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./assets/context/AuthContext";

import ResetStyle from "./assets/styles/ResetStyle";
import GlobalStyle from "./assets/styles/GlobalStyle";

import Layout from "./Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import List from "./Pages/List";

function App() {
  return (
    <AuthProvider>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
