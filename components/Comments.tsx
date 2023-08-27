import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Comment } from "@/types";
import Typography from "@mui/material/Typography";

const Comments = () => {
  const router = useRouter();
  const postId = Number(router.query.postId);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await axios.get("https://jsonplaceholder.org/comments");
    const allComments = response.data;
    const relatedComments = allComments.filter(
      (comment: Comment) => comment.postId === postId
    );

    setComments(relatedComments);
  };

  if (!comments.length) return <h4>No Comments Here</h4>;

  return (
    <>
      <Typography variant="h6">Comments:</Typography>
      {comments.map((comment: Comment) => (
        <p key={comment.id} style={{ marginTop: "2rem" }}>
          {comment.comment}
        </p>
      ))}
    </>
  );
};

export default Comments;
