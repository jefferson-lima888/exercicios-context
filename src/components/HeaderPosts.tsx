import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export const HeaderPosts = () => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const postCtx = useContext(PostContext);

  const handleAddButton = () => {
    if (titleInput && bodyInput) {
      //esse código foi alterado pelo do reducer
      // postCtx?.addPost(titleInput, bodyInput);
      postCtx?.dispatch({
        type: "add",
        payload: { title: titleInput, body: bodyInput },
      });
      setTitleInput("");
      setBodyInput("");
    }
  };

  return (
    <header>
      <h1 className="text-3xl">Título da página posts</h1>
      <div className="flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-8 max-w-lg">
        <input
          type="text"
          placeholder="Digite um título"
          value={titleInput}
          onChange={(event) => setTitleInput(event.target.value)}
          className="border border-gray-300 p-2 text-black text-xl"
        />
        <textarea
          placeholder="Digite um corpo"
          value={bodyInput}
          onChange={(event) => setBodyInput(event.target.value)}
          className="h-24 border border-gray-300 p-2 text-black text-xl"
        ></textarea>
        <button
          className="bg-blue-500 p-3 text-white rounded-md my-4"
          onClick={handleAddButton}
        >
          Adicionar +
        </button>
      </div>
    </header>
  );
};
