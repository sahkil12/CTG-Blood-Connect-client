import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure()

  const { data = {}, isLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data || {};
    },
  });


  const role = data?.role || 'user'
  const isDonor = data?.isDonor || false
  return {
    role,
    roleLoading: isLoading,
    isDonor
  };
};

export default useRole;
