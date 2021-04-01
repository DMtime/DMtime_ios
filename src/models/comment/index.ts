export type comment = {
  content: string;
  is_anonymous: boolean;
  id: number;
  upper_comment_id: number | null;
  writer: string;
  wrote_datetime: string;
  wrote_post: {
    id: number;
  };
};
