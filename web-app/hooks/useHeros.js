import md5 from "md5";
import useSWR from "swr";
import { BASE_ENDPOINT } from "../config";
import { fetcher } from "../utils";

const ts = new Date().getTime();
const hash = md5(
  ts +
    process.env.NEXT_PUBLIC_PRIVATE_API_KEY +
    process.env.NEXT_PUBLIC_PUBLIC_API_KEY
);

export const useHeros = (searchTerm) => {
  const { data, error } = useSWR(
    `${BASE_ENDPOINT}/characters?${
      searchTerm && "name=" + searchTerm?.toLowerCase()
    }&limit=30&ts=${ts}&apikey=${
      process.env.NEXT_PUBLIC_PUBLIC_API_KEY
    }&hash=${hash}`,
    fetcher
  );

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
