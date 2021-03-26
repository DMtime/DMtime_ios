export type board = {
  id: string;
  name: string;
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

export type comment = {
  content: string;
  is_anonymous: boolean;
  id: number;
  upper_comment_id: number;
  writer: uploader;
  wrote_datetime: string;
};
