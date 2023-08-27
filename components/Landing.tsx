import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "@/types";
import PostCard from "@/components/PostCard";
import { Pagination, Stack } from "@mui/material";
import { useRouter } from "next/router";
import Search from "./Search";

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const { query } = useRouter();

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      fetchPosts();
    }, 10000);
    fetchPosts();

    return () => clearInterval(fetchInterval);
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.org/posts");
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = response.data.slice(startIndex, endIndex);
      setPosts(paginatedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  if (query.search && typeof query.search === "string")
    return <Search searchQuery={query.search} />;

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
      <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(100 / postsPerPage)}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Landing;
