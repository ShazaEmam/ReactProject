import axios from "axios";
import store from "../store/store";
import { changeLoader } from "../store/actions/loader";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key: "a48cc1836a8fae36e7ada1520a3f2ed6"
    },
   
});
axiosInstance.interceptors.request.use(function (config) 
  {
    store.dispatch(changeLoader(true));
    
    return config;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use( function (response)
 {
    store.dispatch(changeLoader(false));
    return response;
  },
  function (error) {
    
    return Promise.reject(error);
  });

export default axiosInstance;
