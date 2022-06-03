import { useHeros } from "../hooks/useHeros";
import CharacterGrid from "../components/CharacterGrid";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import InputSearch from "../components/UI/InputSearch";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useHeros(searchTerm);

  return (
    <div>
      <SiteHeader />

      <main className="p-10">
        <h1 className="text-center text-3xl font-bold mb-5">
          Welcome to <span className="text-red-600">Marvel World!</span>
        </h1>

        {isError && (
          <p className="text-red-600 text-center">{isError?.message}</p>
        )}

        <InputSearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading ? (
          "Loading..."
        ) : data?.results?.length > 0 ? (
          <CharacterGrid items={data?.results} />
        ) : (
          "No characters found"
        )}
      </main>
    </div>
  );
}
