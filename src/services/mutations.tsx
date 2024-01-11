import { useMutation } from "@tanstack/react-query";
import {
  setSaved,
  setLiked,
  addCard,
  deleteCard,
  addCardSet,
  deleteCardSet,
} from "./api";
import { useQueryClient } from "@tanstack/react-query";
import parameterize from "parameterize-js";

export function useAddSaved() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id: number; saved: boolean }) => {
      return setSaved(data);
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["language-cards"],
        });
      }
    },
  });
}

export function useAddLiked() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id: number; liked: boolean }) => {
      return setLiked(data);
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["language-cards"],
        });
      }
    },
  });
}

export function useAddCard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { word: string; description: string; set: string }) => {
      return addCard(data);
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["language-cards"],
        });
      }
    },
  });
}

export function useDeleteCard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      return deleteCard(id);
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["language-cards"],
        });
      }
    },
  });
}

export function useAddCardSet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      card_set,
      card_set_name,
    }: {
      card_set: string;
      card_set_name: string;
    }) => {
      return addCardSet({ card_set, card_set_name });
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["card-sets"],
        });
      }
    },
  });
}

export function useDeleteCardSet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => {
      return deleteCardSet(id);
    },
    onSettled: (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        queryClient.invalidateQueries({
          queryKey: ["card-sets"],
        });
      }
    },
  });
}
