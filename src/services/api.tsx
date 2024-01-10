import axios from "axios";
import { cardSet, languageCard } from "../types/api";

const BASE_URL = "https://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getLanguageCards = async () => {
  const response = await axiosInstance
    .get<languageCard[]>("/language-cards")
    .then((data) => data.data);
  return response;
};

export const getLanguageCardsId = async () => {
  const response = await axiosInstance
    .get<languageCard[]>("/language-cards/ids")
    .then((data) => data.data);
  return response;
};

export const getLanguageCardById = async (id: number) => {
  const response = await axiosInstance
    .get<languageCard[]>(`/language-cards/${id}`)
    .then((data) => data.data);
  return response;
};

export const setSaved = async (data: { id: number; saved: boolean }) => {
  const response = await axiosInstance.put(`/language-cards/${data.id}/saved`, {
    saved: data.saved,
  });
};

export const setLiked = async (data: { id: number; liked: boolean }) => {
  const response = await axiosInstance.put(`/language-cards/${data.id}/liked`, {
    liked: data.liked,
  });
};

export const getCardSets = async () => {
  const response = await axiosInstance
    .get<cardSet[]>(`/language-cards/card-groups`)
    .then((data) => data.data);
  return response;
};

export const addCard = async (data: {
  word: string;
  description: string;
  set: string;
}) => {
  const response = await axiosInstance.post(`/language-cards/add-card`, data);
};
