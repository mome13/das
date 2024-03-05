import { URL } from "url";

function updateOptions(headers: any) {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "localhost:3001",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "include",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers": "*",
    ...headers,
  };
}

export default function fetcher(
  url: string | URL | Request,
  init?: RequestInit
) {
  if (init && init.headers) {
    init.headers = updateOptions(init.headers);
  }
  return fetch(url, init).then((response) => response.json());
}
