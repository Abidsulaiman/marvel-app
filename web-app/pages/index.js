import CharacterGrid from "../components/CharacterGrid";
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import InputSearch from "../components/UI/InputSearch";
import axios from "axios";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 2000);

    const fetchData = async () => {
      setIsFetching(true);
      try {
        const { data } = await axios.post("/api/marvel_api", { searchTerm });

        setData(data?.data?.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div>
      <SiteHeader />

      <main className="p-10">
        <h1 className="text-center text-3xl font-bold mb-5">
          Welcome to <span className="text-red-600">Marvel World!</span>
        </h1>

        <InputSearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {fetching ? (
          "Loading..."
        ) : data?.length > 0 ? (
          <CharacterGrid items={data} />
        ) : (
          "No characters found"
        )}
      </main>
    </div>
  );
}
