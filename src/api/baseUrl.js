import axios from "axios"
import { getXsrf } from "../localStorage";

export const baseURL = axios.create({
  baseURL: "https://l8-upgrade-apis.vercel.app/api",
  headers:{
    "Content-type": "application/json",
  },
  timeout: 6000
})

baseURL.interceptors.request.use(
  function(config) {
    if(getXsrf()) {
      config.headers["Content-Type"] = "application/json";
      config.headers["X-XSRF-TOKEN"] = getXsrf();
    }
    return config;
    },

    function (error) {
      console.log(error);
      return Promise.reject(error);
  }
)

baseURL.interceptors.response.use(
    function (response) {
      const res = response.data;
      if (response.status === 200) {
        if (res.success) return response;
        return response;
      }
      // alert(response.statusText || 'Error')

      return response;
    },
    function (error) {
      if (
          ["AUTH001", "AUTH002"].indexOf(error.response.data.errorCode) >= 0 &&
          getXsrf().length > 0
      ) {
        alert(error.response.data.message);
        window.location.reload();
        return;
      }

      alert(error.response.data.message);
      // alert(error.response.data.message);
      return Promise.reject(error);
    }
);