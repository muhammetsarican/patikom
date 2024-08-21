import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { checkStorage } from "./helpers/checkAuth";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    checkStorage() ? navigate("/home") : navigate("/auth");
  }, [])
  return (
    <Outlet />
  )
}

export default App
