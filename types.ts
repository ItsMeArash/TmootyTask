export interface Post {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  comment: string;
}

export interface FormValues {
  slug: string;
  title: string;
  content: string;
  category: string;
  publisherName: string;
}

export interface PostProps {
  postData: Post
}