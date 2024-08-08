"use client";

import React from "react";
import { ApodData } from "@/service/unAuthenticated/apod-service";

interface ApodInfoProps {
  data: ApodData;
}

export default function ApodInfo({ data }: ApodInfoProps) {
  // const { data } = useApod();
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
}
