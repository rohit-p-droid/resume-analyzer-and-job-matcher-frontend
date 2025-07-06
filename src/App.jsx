import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
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
            <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header>
            <Outlet />
          </Header>
        </div>
        <footer className="bg-gray-800 dark:text-white">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
