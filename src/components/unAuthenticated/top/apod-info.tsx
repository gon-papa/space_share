import React from "react";
import { apodFetch } from "@/service/unAuthenticated/apod-service";

export const ApodInfo = async () => {
  const data = await apodFetch();
  return (
    <div>
      <h1>今日の1枚</h1>
      <p>NASAが更新している天文学の画像日報です。</p>
      <h2>{data?.title}</h2>
      <p>{data.date}</p>
      <p>{data?.explanation}</p>
      <img src={data?.url} alt={data?.title} />
    </div>
  );
};

export default ApodInfo;
