import { ReactNode, createContext, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostContextType = {
  posts: Post[];
  addPost: (titles: string, body: string) => void;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (title: string, body: string) => {
    setPosts([...posts, { id: posts.length, title, body }]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
