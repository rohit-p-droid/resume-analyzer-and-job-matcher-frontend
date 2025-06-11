import { Outlet } from "react-router-dom";
import config from "./config/config"

function App() {
  const apiUrl = config.API_URL;
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
