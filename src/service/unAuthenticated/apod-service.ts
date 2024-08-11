import { ApodData, getApodFetch } from "@/api/repository/apod_repository";

export const apodFetch = async (): Promise<ApodData> => {
  const res = await getApodFetch();
  if (res instanceof Error) {
    throw new Error("Failed to fetch APOD");
  }
  return res;
};
