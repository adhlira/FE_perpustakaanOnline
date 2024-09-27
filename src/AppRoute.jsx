import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Books from "./pages/Books.jsx";
import Book from "./pages/BookPerCategory.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import About from "./pages/About.jsx"

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/books", element: <Books /> },
  { path: "/book_per_category_biografi", element: <Book /> },
  { path: "/login", element: <Login /> },
  { path: "/sign_up", element: <SignUp /> },
  { path: "/about", element: <About /> },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
