type AppConfig = {
  nasaApiKey: string;
  nasaBaseApiPath: string;
};

export const appConfig: AppConfig = {
  nasaApiKey: validateValue(process.env.NASA_API_KEY, "NASA_API_KEY"),
  nasaBaseApiPath: validateValue(
    process.env.NASA_BASE_API_PATH,
    "NASA_BASE_API_PATH"
  ),
};

function validateValue(value: string | undefined, name: string) {
  if (value === undefined) {
    throw new Error(`required env value ${name} is not found`);
  }

  return value;
}
