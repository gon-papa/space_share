import { apodFetch } from "@/service/unAuthenticated/apod-service";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export const ApodInfo = async () => {
  const data = await apodFetch();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        今日の1枚
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        NASAが更新している天文学の画像(動画)日報です。
      </Typography>
      <Card sx={{ mt: 4 }}>
        {data?.media_type === "video" ? (
          <Box
            sx={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src={data?.url}
              title={data?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ) : (
          <CardMedia
            component="img"
            image={data?.url}
            alt={data?.title}
            sx={{ height: 500, objectFit: "cover" }}
          />
        )}
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {data.date}
          </Typography>
          <Typography variant="body1" paragraph>
            {data?.explanation}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ApodInfo;
