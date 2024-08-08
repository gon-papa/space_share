import ApodInfo from "@/components/unAuthenticated/top/apod-info";
import { apodFetch } from "@/service/unAuthenticated/apod-service";
import { Box } from "@mui/material";
import React from "react";

const Top = async () => {
  const data = await apodFetch();

  return (
    <div>
      <ApodInfo data={data} />
    </div>
  );
};

export default Top;
