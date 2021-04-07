export type board = {
  name: string;
  id: number;
  explain: string;
};

export type uploader = {
  username: string;
};

export type post = {
  content: string;
  is_anonymous: boolean;
  id: number;
  image_ids: string[];
  likes: number;
  posted_datetime: string;
  posted_gallery: board;
  title: string;
  uploader: uploader;
  views: number;
};
