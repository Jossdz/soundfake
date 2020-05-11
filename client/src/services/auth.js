import axios from "axios";

const baseURL = "http://localhost:3000/auth";

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const AUTH_SERVICE = {
  SIGNUP: async ({ email, password }) => {
    return await service.post("/signup", { email, password });
  },
  LOGIN: async ({ email, password }) => {
    return await service.post("/login", { email, password });
  },
  LOGOUT: async () => {
    return await service.get("/logout");
  },
  CURRENT_USER: async () => {
    return await service.get("/currentUser");
  },
};

export default AUTH_SERVICE;
