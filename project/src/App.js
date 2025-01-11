import { createContext, lazy, Suspense, useEffect, useState } from "react";
import Main from "./screens/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
export const WindowWidthSize = createContext();

function App() {
  // 로그 제거 코드
  // if (process.env.NODE_ENV === "production") {
  //   console = window.console || {};
  //   console.log = function no_console() {};
  //   console.warn = function no_console() {};
  //   console.error = function no_console() {};
  // }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth, "width");
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowWidthSize.Provider value={windowWidth}>
      <Suspense
        fallback={
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        }
      >
        <div className="container mx-auto my-10 bg-black App max-w-screen-1g">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/react" element={<Main />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Suspense>
    </WindowWidthSize.Provider>
  );
}

export default App;
