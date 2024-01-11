import { PostProvider } from "@/contexts/PostContext";
import { FooterPosts } from "./FooterPosts";
import { HeaderPosts } from "./HeaderPosts";
import { PostList } from "./PostList";

export const Posts = () => {
  return (
    <PostProvider>
      <div className="container mx-auto flex flex-col max-w-4xl my-8">
        <HeaderPosts />
        <PostList />
        <FooterPosts />
      </div>
    </PostProvider>
  );
};
