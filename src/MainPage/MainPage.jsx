import { createBrowserRouter } from "react-router-dom";
import RouterMainPage from "../Pages/MainRoterPage/RouterMainPage";
import Home from "../Pages/Home/Home";
import Details from "../Pages/detailsPage/Details";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StatisticPage from "../Pages/Statistic/StatisticPage";


const MainPage = createBrowserRouter([
    {
        path: '/',
        element: <RouterMainPage></RouterMainPage>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch(`/data.json`)
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader:()=> fetch(`./data.json`)
            },
            {
                path: '/donation',
                element:<Donation></Donation>
            },
            {
                path: '/statistic',
                element: <StatisticPage></StatisticPage>
            }
        ]
    }
])

export default MainPage;