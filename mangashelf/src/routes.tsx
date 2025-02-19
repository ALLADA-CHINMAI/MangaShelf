import { useNavigate, useRoutes } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import { useEffect } from "react";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
];

export default function AppRoutes() {

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("userEmail"); // Check auth status

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login"); // Redirect to login only if not authenticated
      }
    }, [isAuthenticated, navigate]);

    return useRoutes(routes);
}
