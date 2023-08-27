import { Post, SearchProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Search = ({ searchQuery }: SearchProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.org/posts");
      const allPosts = response.data;
      const matchPosts = allPosts.filter((post: Post) =>
        post.title.includes(searchQuery)
      );
      setPosts(matchPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          listStyle: "none",
          maxWidth: "1000px",
          gap: "3rem",
        }}
      >
        {posts.map((post: Post) => (
          <li key={post.id}>
            <PostCard postData={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
