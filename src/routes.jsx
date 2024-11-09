import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import SubNavbarLayout from "./pages/SubNavbarLayout.jsx";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <SubNavbarLayout />,
                children: [
                    { path: "", element: <HomePage /> },
                ]
            },
            { path: "login", element: <LoginPage /> }
        ],
        errorElement: <NotFoundPage />
    }
]);

export { router };