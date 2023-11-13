import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../App";

const Router = () => {

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: ":page",
        element: <App />,
    },
    {
        path: "market/:item",
        element: <App />,
    }
]);

    return <RouterProvider router={router}/>;
};

export default Router;