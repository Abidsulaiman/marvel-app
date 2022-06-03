import md5 from "md5";
import useSWR from "swr";
import { BASE_ENDPOINT, PRIVATE_API_KEY, PUBLIC_API_KEY } from "../config";
import { fetcher } from "../utils";

const ts = new Date().getTime();
const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);

export const useHeros = () => {
  const { data, error } = useSWR(
    `${BASE_ENDPOINT}/characters?ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}`,
    fetcher
  );

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
