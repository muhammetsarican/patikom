import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "./providers/AuthProvider";

function App() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    navigate("/home");
  }, [, user])

  return (
    <Outlet />
  )
}

export default App
