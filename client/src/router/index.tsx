import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import HomeRoutes from "../routes/HomeRoutes"
import AuthRoutes from "../routes/AuthRoutes"

export default createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                AuthRoutes,
                HomeRoutes
            ]
        }
    ]
)