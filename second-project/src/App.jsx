import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Join from "./component/Member/Join/Join";
import Login from "./component/Member/Login/Login";
import Info from "./component/Member/Info/Info";
import BoardList from "./component/Board/BoardList";
import BoardForm from "./component/Board/BoardForm";
import BoardDetail from "./component/Board/BoardDetail";
import Header from "./component/Common/Header/Header";
import Home from "./component/Common/Home/Home";
import Footer from "./component/Common/Footer/Footer";
import { AuthProvider } from "./component/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/boards" element={<BoardList />} />
          <Route path="/boardForm" element={<BoardForm />} />
          <Route path="/boards/:id" element={<boardDetail />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
