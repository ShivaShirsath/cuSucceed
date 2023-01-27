import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={2}
        toastOptions={{
          icon: "✅",
          style: {
            borderRadius: "1.5vmin",
            background: "hsla(0, 0%, 0%, 0.5)",
            backdropFilter: "blur(.25vmin)",
            color: "#fff",
          },
        }}
      />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="##">Skills</a>
          </li>
          <li>
            <a href="###">Contact</a>
          </li>
          <li>
            <a href="####">About</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/cuSucceed/" element={<Home />} />
        <Route path="/cuSucceed/xyz" element={<>xyz</>} />
        <Route path="/cuSucceed/*" element={<Navigate to="/cuSucceed" />} />
        <Route path="*" element={<Navigate to="/cuSucceed" />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
