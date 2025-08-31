import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = localStorage.getItem("tracktab_token");
  if (!user) {
    return <Navigate to="/login" />;
  }
};
export default ProtectedRoute;
