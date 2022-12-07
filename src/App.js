import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";

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
            backdropFilter: "blur(.25vmax)",
            color: "#fff",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
