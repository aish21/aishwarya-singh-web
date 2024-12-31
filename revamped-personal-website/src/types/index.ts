export type User = {
  id: string;
  name: string;
  email: string;
};

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export type ApiResponse<T> = {
  data: T;
  error?: string;
};
