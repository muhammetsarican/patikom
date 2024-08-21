import Auth from "../../components/layout/Auth";
import Login from "../../components/layout/Auth/content/login";
import Register from "../../components/layout/Auth/content/register";

export default {
    path: "auth",
    element: <Auth />,
    children: [
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        }
    ]
}