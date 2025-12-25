import Loader from "../Components/Loader/Loader";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader></Loader>

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
