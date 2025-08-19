import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import CardsTarot from "../pages/CardsTarot"
import CardDetail from "../pages/CardDetail"
import CardReading from "../pages/CardReading"
import CompleteLecture from "../pages/CompleteLecture"
import Layout from "../layout/Layout"

const routerTarot = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/cartas-tarot",
            element: <CardsTarot/>
        },
        {
            path: "/carta-detalle",
            element: <CardDetail/>
        },
        {
            path: "/lectura",
            element: <CardReading/>
        },
        {
            path: "/lectura-completada",
            element: <CompleteLecture/>
        },
    ]
}])

export default routerTarot;