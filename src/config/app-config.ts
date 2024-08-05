type AppConfig = {
  nasaApiKey: string;
  nasaBaseApiPath: string;
};

export const appConfig: AppConfig = {
  nasaApiKey: validateValue(
    process.env.NEXT_PUBLIC_NASA_API_KEY,
    "NEXT_PUBLIC_NASA_API_KEY"
  ),
  nasaBaseApiPath: validateValue(
    process.env.NEXT_PUBLIC_NASA_BASE_API_PATH,
    "NEXT_PUBLIC_NASA_BASE_API_PATH"
  ),
};

function validateValue(value: string | undefined, name: string) {
  if (value === undefined) {
    throw new Error(`required env value ${name} is not found`);
  }

  return value;
}
