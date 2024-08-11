import { appConfig } from "@/config/app-config";
import { Client, createClient } from "@hey-api/client-fetch";
import { APODResponse, getApod } from "../gen";

const revalidateTime: number = 3600;

const apodFetch = (request: Request) => {
  return fetch(request, {
    next: { revalidate: revalidateTime },
  });
};

const client: Client = createClient({
  baseUrl: appConfig.nasaBaseApiPath,
  headers: {
    "Content-Type": "application/json",
  },
  fetch: apodFetch,
});

export type ApodData = {
  date: string;
  explanation: string;
  url: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  copyright: string;
};

const mappping = (data: APODResponse): ApodData => {
  return {
    date: data.date || "",
    explanation: data.explanation || "",
    url: data.url || "",
    hdurl: data.hdurl || "",
    media_type: data.media_type || "",
    service_version: data.service_version || "",
    title: data.title || "",
    copyright: data.copyright || "",
  };
};

export const getApodFetch = async (
  date: string | null = null
): Promise<ApodData> => {
  const res = await getApod({
    client: client,
    query: {
      api_key: appConfig.nasaApiKey,
      date: date?.toString(),
    },
  });
  if (res.error) {
    throw new Error("Failed to fetch APOD");
  }

  if (res.data.media_type !== "image") {
    // apodはたまに動画の場合がある。動画の場合はデフォルトの日付で再取得
    return getApodFetch(appConfig.defaultApodDate);
  }
  return mappping(res.data);
};
