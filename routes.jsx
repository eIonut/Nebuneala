import { createBrowserRouter } from "react-router-dom";
import Maps from "./src/components/Maps";
import Map from "./src/components/Map";
import ErrorPage from "./src/components/ErrorPage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Maps/>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: 'maps/:id',
    element: <Map/>,
    errorElement: <ErrorPage></ErrorPage>,
  }
])

export default router;
