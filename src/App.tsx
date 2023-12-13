import { Routes, Route } from "react-router-dom";

import ResetStyle from "./assets/styles/ResetStyle";
import GlobalStyle from "./assets/styles/GlobalStyle";

import Layout from "./Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
