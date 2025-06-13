import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { useSelector } from "react-redux"
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme])
  return (
    <>
      <div>
        <Header>
          <Outlet />
        </Header>
      </div>
    </>
  )
}

export default App
