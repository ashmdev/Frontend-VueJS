const baseUrl = "https://localhost",
  port = 5001;

export const USER_URLS = {
  root: `${baseUrl}:${port}/users`,
  login: `${baseUrl}:${port}/users/authenticate`
};
