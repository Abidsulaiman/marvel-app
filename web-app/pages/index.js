import Head from "next/head";
import { BASE_ENDPOINT, PRIVATE_API_KEY, PUBLIC_API_KEY } from "../config";
import useSWR from "swr";
import { fetcher } from "../utils";
import md5 from "md5";
import { useState, useEffect } from "react";
import { useHeros } from "../hooks/useHeros";
import CharacterGrid from "../components/CharacterGrid";

export default function Home() {
  const { data, isLoading, isError } = useHeros();

  console.log(data);

  return (
    <div>
      <Head>
        <title>Marvel</title>
        <meta name="description" content="Marvel characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10">
        <h1 className="text-center text-3xl font-bold mb-5">
          Welcome to <span className="text-red-600">Marvel World!</span>
        </h1>

        {isError && (
          <p className="text-red-600 text-center">{isError?.message}</p>
        )}

        {isLoading ? "Loading..." : <CharacterGrid items={data?.results} />}
      </main>
    </div>
  );
}
