import { PostActions, postReducer } from "@/reducers/postReducer";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const STORAGE_KEY = "postContextContent";

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
  const [isMounted, setIsMounted] = useState(false);

  //para persistir um localstorage vamos adicionar nesse código o parse ou retorno null
  const [posts, dispatch] = useReducer(
    postReducer,
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")
      : []
  );

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

  useEffect(() => {
    setIsMounted(true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  if (!isMounted) {
    return null;
  }

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

//criando um hook de atalho do useContext
export const usePosts = () => useContext(PostContext);
