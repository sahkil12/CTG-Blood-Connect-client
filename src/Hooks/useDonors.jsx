import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useDonors = (filters = {}) => {
     const axiosPublic = useAxios();
     const { bloodGroup, area, limit } = filters;

     return useQuery({
          queryKey: ["donors", bloodGroup, area, limit],
          queryFn: async () => {
               const res = await axiosPublic.get("/donors", {
                    params: {
                         bloodGroup,
                         area,
                         limit,
                    },
               });
               return res.data;
          },
          // enabled: !!(bloodGroup || area),
     });
};

export default useDonors;