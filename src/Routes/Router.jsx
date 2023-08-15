import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import FirstLayouts from "../Layouts/FirstLayouts";
import Error from "../Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayouts></FirstLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }

]);