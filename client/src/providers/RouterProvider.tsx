import { RouterProvider } from "react-router-dom"
import router from "../router"

export default () => {
    return (
        <RouterProvider router={router} />
    )
}