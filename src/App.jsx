import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NotFoundPage from "./pages/NotFoundPage";
import BaseLayout from "./Layout/BaseLayout";
import NowPage from "./pages/NowPage";
import MyQuote from "./pages/MyQuote";
import Books from "./pages/Books";

function App() {
  function CustomRoutes() {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/now-page", element: <NowPage /> },
      { path: "/books", element: <Books /> },
      { path: "/quotes", element: <MyQuote /> },
      { path: "*", element: <NotFoundPage /> },
    ]);
    return routes;
  }

  return (
    <BaseLayout>
      <CustomRoutes />
    </BaseLayout>
  );
}

export default App;
