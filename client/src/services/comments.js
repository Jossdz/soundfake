import axios from "axios";

const baseURL = "http://localhost:3000/comment";

const service = axios.create({
  baseURL,
  withCredentials: true,
});

export const GET_COMMENT = async (songId) => {
  return await service.get(`/${songId}`);
};

export const CREATE_COMMENT = async (data) => {
  return await service.post("/", data);
};

export const DELETE_COMMENT = async (id) => {
  return await service.delete(`/${id}`);
};
