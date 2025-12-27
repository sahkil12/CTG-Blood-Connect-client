import Loader from "../Components/Loader/Loader";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { role, roleLoading } = useRole();
  if (roleLoading) return <Loader></Loader>

  if (role !== "admin") {
    return <Navigate to="/forbidden" replace/>;
  }

  return children;
};

export default AdminRoute;
