export type comment = {
  content: string;
  is_anonymous: false;
  id: number;
  upper_comment_id: number;
  writer: {
    username: string;
  };
  wrote_datetime: string;
  wrote_post: {
    id: number;
  };
};
