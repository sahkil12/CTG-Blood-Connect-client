import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
     baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
     const { user, logOutUser } = useAuth();
     const navigate = useNavigate()

     useEffect(() => {
          const requestInterceptor = axiosSecure.interceptors.request.use(
               async (config) => {
                    if (user) {
                         const token = await user.getIdToken();
                         config.headers.Authorization = `Bearer ${token}`;
                    }
                    return config;
               }
          );

          const responseInterceptor = axiosSecure.interceptors.response.use(
               res => res,
               async (error) => {
                    const status = error.response?.status;

                    if (status === 401) {
                         await logOutUser();
                         navigate("/login");
                    }

                    if (status === 403) {
                         navigate("/forbiddenPage");
                    }

                    return Promise.reject(error);
               }
          );

          return () => {
               axiosSecure.interceptors.request.eject(requestInterceptor);
               axiosSecure.interceptors.response.eject(responseInterceptor);
          };
     }, [user, logOutUser, navigate]);

     return axiosSecure
};

export default useAxiosSecure;