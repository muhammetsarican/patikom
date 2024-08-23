import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("login");
    }, [])
    return (
        <Outlet />
    )
}