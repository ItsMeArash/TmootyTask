import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PostProps } from "@/types";
import Link from "next/link";

export default function PostCard({ postData }: PostProps) {
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {postData.updatedAt}
        </Typography>
        <Typography variant="h5" component="div">
          {postData.slug}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {postData.category}
        </Typography>
        <Typography variant="body2">{postData.title}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={`/${postData.id}`} style={{ textDecoration: "none" }}>
            Read More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
