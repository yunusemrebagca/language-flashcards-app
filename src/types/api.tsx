export type languageCard = {
  id: number;
  word: string;
  description: string;
  liked: boolean;
  saved: boolean;
  set_name: string;
};

export type cardSet = {
  id: number;
  card_set: string;
  card_set_name: string;
  created_at?: Date;
};
