import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxios();

  const { data: role = null, isLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      console.log(res.data);
      return res.data?.role;
    },
  });
  
  return {
    role,
    roleLoading: isLoading,
  };
};

export default useRole;
