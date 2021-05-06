export type board = {
  name: string;
  explain: string;
  gallery_type: 0 | 1 | 2;
  gallery_id: string;
};

export type uploader = {
  username: string;
};

export type post = {
  content: string;
  is_anonymous: boolean;
  is_mine: boolean;
  id: number;
  images: string[];
  number_of_likes: number;
  number_of_dislikes: number;
  posted_datetime: string;
  posted_gallery: board;
  title: string;
  uploader: uploader;
  views: number;
  my_reaction: "none" | "like" | "dislike";
};
