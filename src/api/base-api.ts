import Axios, { CreateAxiosDefaults } from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import { appConfig } from "../config/app-config";

type HttpProps = {
  isConvertKeys?: boolean;
  accept?: string;
  token?: string;
  axiosDefaults?: CreateAxiosDefaults;
};

const defaultHttpProps: HttpProps = {
  isConvertKeys: true,
  accept: "application/json",
  axiosDefaults: {
    baseURL: appConfig.nasaBaseApiPath,
  },
};

export class Http {
  public static axios(props?: HttpProps) {
    const { axiosDefaults, isConvertKeys, accept, token } = {
      ...defaultHttpProps,
      ...props,
    };

    const axios = Axios.create({ ...axiosDefaults });

    axios.interceptors.request.use((config) => {
      if (config.headers && accept) {
        config.headers.Accept = accept;
      }

      if (config.headers && token) {
        config.headers.authorization = `bearer ${token}`;
      }

      if (isConvertKeys) {
        if (config.data) {
          config.data = snakecaseKeys(config.data);
        }
        if (config.params) {
          config.params = snakecaseKeys(config.params);
        }
      }

      return config;
    });

    axios.interceptors.response.use(
      (response) => {
        if (isConvertKeys) {
          camelcaseKeys(response.data, { deep: true });
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return axios;
  }
}
