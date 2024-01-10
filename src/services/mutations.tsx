import { useMutation } from "@tanstack/react-query";
import { setSaved, setLiked, addCard } from "./api";
import { useQueryClient } from "@tanstack/react-query";

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
