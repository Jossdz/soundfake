import axios from "axios";

const baseURL = "https://nameless-lake-81661.herokuapp.com/song";

const service = axios.create({
  baseURL,
  withCredentials: true,
});

export const CREATE_SONG = async ({ title, songURL }) => {
  return await service.post("/", { title, songFile: songURL });
};
export const GET_SONGS = async () => {
  return await service.get("/");
};
export const GET_SONG = async (songId) => {
  return await service.get(`/${songId}`);
};
export const EDIT_SONG = async ({ title, songURL, songId }) => {
  return await service.patch(`/${songId}`, { title, songURL });
};
export const DELETE_SONG = async (songId) => {
  return await service.delete(`/${songId}`);
};
