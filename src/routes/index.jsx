import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Like from "../pages/like";
import MainLayout from "../components/main-layout";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/shop",
                    element:<Shop/>
                },
                {
                    path:"/like",
                    element:<Like/>
                },
            ]
        },
        
    ]
)
