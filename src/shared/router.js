import DescriptionPage from "../pages/description/DescriptionPage";
import HomePage from "../pages/home/HomePage";

export const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: "description/:id",
        element: <DescriptionPage/>
    },
]