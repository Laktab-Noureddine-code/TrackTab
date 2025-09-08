import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to="/" /> : children;
}

export default PublicRoutes;
