import Chat from "../pages/chat/chat";
import Home from "../pages/home/home";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default AppRouter;
