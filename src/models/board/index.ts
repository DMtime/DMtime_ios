export type board = {
  name: string;
  id: number;
  explain: string;
  gellary_type: 0 | 1 | 2;
  gellary_id: string;
};

export type uploader = {
  username: string;
};

export type image = Record<string, string>;

export type post = {
  content: string;
  is_anonymous: boolean;
  id: number;
  image_ids: image;
  number_of_likes: number;
  number_of_dislikes: number;
  posted_datetime: string;
  posted_gallery: board;
  title: string;
  uploader: uploader;
  views: number;
  my_reaction: "none" | "like" | "dislike";
};
