import { useQueries, useQuery } from "@tanstack/react-query";
import {
  getLanguageCards,
  getLanguageCardById,
  getLanguageCardsId,
  getCardSets,
} from "./api";

export const useLanguageCards = () => {
  return useQuery({
    queryKey: ["language-cards"],
    queryFn: getLanguageCards,
    refetchOnWindowFocus: false,
  });
};

export const useLanguageCardsIds = () => {
  return useQuery({
    queryKey: ["language-cards", "ids"],
    queryFn: getLanguageCardsId,
    refetchOnWindowFocus: false,
  });
};

export const useLanguageCardsById = (
  ids: (number | undefined)[] | undefined
) => {
  const queries = (ids ?? []).map((id) => ({
    queryKey: ["language-cards", { id }],
    queryFn: () => getLanguageCardById(id!),
    refetchOnWindowFocus: false,
  }));

  return useQueries({ queries });
};

export const useLanguageCardById = (id: number) => {
  return useQuery({
    queryKey: ["language-cards", { id }],
    queryFn: () => getLanguageCardById(id),
    refetchOnWindowFocus: false,
  });
};

export const useLanguageCardSets = () => {
  return useQuery({
    queryKey: ["card-sets"],
    queryFn: () => getCardSets(),
    refetchOnWindowFocus: false,
  });
};
