import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NotFoundPage from "./pages/NotFoundPage";
import BaseLayout from "./Layout/BaseLayout";

function App() {
  function CustomRoutes() {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "*", element: <NotFoundPage /> },
    ]);
    return routes;
  }

  return (
    <div>
        <BaseLayout>
          <CustomRoutes />
        </BaseLayout>
    </div>
  );
}

export default App;
