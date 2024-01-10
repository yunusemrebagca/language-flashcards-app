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
  created_at?: Date;
};
