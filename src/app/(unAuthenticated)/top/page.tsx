import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ApodInfo from "@/components/unAuthenticated/top/apod-info";

const Top = async () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, color: "#fff" }}>
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            宇宙の魅力を探る
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            SpaceShareは、NASAのAPIを利用して最新の天文学に関する情報を提供します。
            毎日更新される「今日の1枚」で、宇宙の神秘に触れてみましょう。
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            サインインすることで、より多くの機能やカスタマイズされた宇宙の情報にアクセスできます！
          </Typography>
          <Button variant="contained" sx={styles.signInButton} href="/signin">
            サインインする
          </Button>
        </Box>
        <ApodInfo />
      </Container>
    </Box>
  );
};

const styles = {
  signInButton: {
    padding: "10px 20px",
    width: "300px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRadius: "25px",
    background:
      "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ff8a00 100%)",
    color: "#fff",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    "&:hover": {
      background:
        "linear-gradient(135deg, #ff8a00 0%, #f5576c 50%, #f093fb 100%)",
      transform: "scale(1.1)",
      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
    },
    "&:active": {
      transform: "scale(1.05)",
      boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)",
    },
  },
};

export default Top;
