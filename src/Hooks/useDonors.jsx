import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useDonors = (filters = {}) => {
     const axiosPublic = useAxios();
     const { bloodGroup, area, limit, page = 1 } = filters;

     return useQuery({
          queryKey: ["donors", bloodGroup, area, limit, page],
          queryFn: async () => {
               const res = await axiosPublic.get("/donors", {
                    params: {
                         bloodGroup,
                         area,
                         limit,
                         page
                    },
               });
               return res.data;
          },
          keepPreviousData: true,
     });
};

export default useDonors;