import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
     baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
     const { user, logOutUser } = useAuth();
     useEffect(() => {
          const requestInterceptor = axiosSecure.interceptors.request.use(
               (config) => {
                    if (user?.accessToken) {
                         config.headers.Authorization = `Bearer ${user?.accessToken}`
                    }
                    return config;
               }
          )
          // 
          const responseInterceptor = axiosSecure.interceptors.response.use(
               (response) => response,
               (error) => {
                    if (error.response?.status === 401 || error.response?.status === 403)
                         logOutUser()
               }
          );

          return () => {
               axiosSecure.interceptors.request.eject(requestInterceptor)
               axiosSecure.interceptors.response.eject(responseInterceptor)
          }

     }, [user, logOutUser])

     return axiosSecure
};

export default useAxiosSecure;