import { createBrowserRouter } from "react-router-dom";
import Home from './sources/home.js'
import About from './sources/about.js'
import Root from './Root.js'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/about",
                    element: <About />
                    index: true
                }
            ]
        }
    ]
);

export default router;
