import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Post } from "@/types";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Comments from "./Comments";

const CustomPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Details = () => {
  const [post, setPost] = useState<null | Post>(null);
  const router = useRouter();
  const postId = router.query.postId;

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.org/posts/${postId}`
      );
      setPost(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!post) return <h1>Loading...</h1>;

  return (
    <Container maxWidth="lg">
      <CustomPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{marginTop: "2rem"}}>
          Category: {post.category}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Published At: {post.publishedAt}
        </Typography>
      </CustomPaper>
      <CustomPaper elevation={3}>
        <Comments />
      </CustomPaper>
    </Container>
  );
};

export default Details;
