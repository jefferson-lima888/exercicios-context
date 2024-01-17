import { PostActions, postReducer } from "@/reducers/postReducer";
import {
  Dispatch,
  ReactNode,
  createContext,
  useReducer,
  useState,
} from "react";

export type Post = {
  id: number;
  title: string;
  body: string;
};

type PostContextType = {
  posts: Post[];
  // addPost: (titles: string, body: string) => void;
  // removePost: (id: number) => void;
  dispatch: Dispatch<PostActions>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  //esse código foi substituido pelo reducer
  // const [posts, setPosts] = useState<Post[]>([]);

  // const addPost = (title: string, body: string) => {
  //   //esse código foi substituido pelo reducer
  //   // setPosts([...posts, { id: posts.length, title, body }]);

  //   dispatch({ type: "add", payload: { title, body } });
  // };

  // const removePost = (id: number) => {
  //   dispatch({ type: "remove", payload: { id } });
  // };

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
