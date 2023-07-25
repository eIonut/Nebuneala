import { createBrowserRouter } from "react-router-dom";
import Maps from "./src/components/Maps";
import ErrorPage from "./src/components/ErrorPage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Maps/>,
    errorElement: <ErrorPage></ErrorPage>,
  }
])

export default router;
