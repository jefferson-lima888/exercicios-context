import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const FooterPosts = () => {
  const postCtx = useContext(PostContext);

  return <footer>Total de POSTS: {postCtx?.posts.length}</footer>;
};
