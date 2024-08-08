import { APODApi, APODResponse, Configuration } from "@/api";
import { appConfig } from "@/config/app-config";
import { AxiosResponse } from "axios";

const api = new APODApi(new Configuration({ apiKey: appConfig.nasaApiKey }));
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

export const apodFetch = async (): Promise<ApodData> => {
  console.log("apodFetch");
  const res: AxiosResponse<APODResponse, any> = await api.getApod();
  if (res.status !== 200) {
    throw new Error("Failed to fetch APOD");
  }
  if (res.data.media_type !== "image") {
    // apodはたまに動画の場合がある。動画の場合はデフォルトの日付で再取得
    return apodDateFetch(appConfig.defaultApodDate);
  }
  return mappping(res.data);
};

const apodDateFetch = async (date: string): Promise<ApodData> => {
  const res = await api.getApod(date);
  if (res.status !== 200) {
    throw new Error("Failed to fetch APOD");
  }
  return mappping(res.data);
};
