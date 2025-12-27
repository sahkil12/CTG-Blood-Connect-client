import Loader from "../Components/Loader/Loader";
import useRole from "../Hooks/useRole";
import Forbidden from "../Components/ErrorPages/Forbidden";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader></Loader>

  if (role !== "admin") {
    return <Forbidden></Forbidden>
  }

  return children;
};

export default AdminRoute;
