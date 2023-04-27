import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import axios from "axios";
import Loader from "../../components/UI/Loader";

function CharacterPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [fetching, setIsFetching] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const { data } = await axios.post("/api/character", { char_id: slug });

        setData(data?.data?.results?.[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div>
      <SiteHeader />

      <div className="p-10">
        <div className="mb-4">
          <Link href="/">
            <a>{"<"} back</a>
          </Link>
        </div>

        {fetching ? (
          <Loader />
        ) : !data ? (
          "No data found"
        ) : (
          <>
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4">
              <div className="col-span-5">
                <img
                  src={data?.thumbnail?.path + "." + data?.thumbnail?.extension}
                  alt={data?.name}
                  className="w-full rounded-xl"
                />
              </div>

              <div className="col-span-7">
                <h1 className="text-4xl font-bold mb-4">{data?.name}</h1>
                <p className="text-lg text-gray-500">
                  {data?.description || "No description"}
                </p>
              </div>
            </div>
            <hr className="my-10" />
            <h3 className="text-xl mt-10 font-semibold mb-2 underline">
              Comic Appearance
            </h3>
            <ul>
              {data?.comics?.items?.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item?.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default CharacterPage;
