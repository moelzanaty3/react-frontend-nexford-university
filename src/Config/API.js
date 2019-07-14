export const BASE_URL = "https://vsigns.app/v2";
export const URLComposer = (...urls) =>
  urls.reduce((acc, curr) => acc + curr, "");
