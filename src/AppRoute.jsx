import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Books from "./pages/Books.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/books", element: <Books /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
