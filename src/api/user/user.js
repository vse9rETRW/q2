import { baseURL } from '../baseUrl';

export const user = {
  login: function (data) {
    return baseURL({
      url: "/login",
      method: "post",
      data
    })
  },
  register: function (data) {
    return  baseURL({
      url: "/register",
      method: "post",
      data
    })
  }
}