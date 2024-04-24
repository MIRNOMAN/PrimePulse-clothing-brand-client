import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Shop from "../Pages/Shop/Shop";
import Men from "../Pages/Men/Men";
import Women from "../Pages/Women/Women";
import Kids from "../Pages/Kids/Kids";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Shop></Shop>,
            },
            {
                path: '/men',
                element: <Men></Men>,
            },
            {
                path: '/women',
                element: <Women></Women>,
            },
            {
                path: '/kids',
                element: <Kids></Kids>,
            },
        ]

    },
]);


export default router;


