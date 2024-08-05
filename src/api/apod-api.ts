import { appConfig } from "../config/app-config";
import { Http } from "./base-api";

export const apodApi = async function () {
  try {
    const response = await Http.axios().get(
      `planetary/apod?api_key=${appConfig.nasaApiKey}`
    );
    return response;
  } catch (error) {
    console.error("APIリクエストエラー:", error);
    throw error;
  }
};
