import React from "react";
import { useAmp } from "next/amp";
import Link from "next/link";

export const config = { amp: "hybrid" };

function CharacterItem({ hero }) {
  const isAmp = useAmp();

  const { thumbnail, name, description, id } = hero;

  return (
    <Link href={`/character/${id}`}>
      <div
        className="overflow-hidden relative bg-black hover:bg-red-700 transition-colors ease-in-out duration-300 cursor-pointer group rounded-xl"
        style={{ minHeight: "10rem" }}
      >
        <figure className="border-b-4 border-red-600">
          {isAmp ? (
            <amp-img
              width="300"
              height="300"
              src={thumbnail?.path + "." + thumbnail?.extension}
              alt={name}
              layout="responsive"
            />
          ) : (
            <img
              src={thumbnail?.path + "." + thumbnail?.extension}
              alt={name}
              className="w-full h-80 object-cover"
            />
          )}
        </figure>
        <div className="p-4 text-gray-50 h-40 flex flex-col justify-between">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-400 font-semibold truncate group-hover:text-white">
            {description}
          </p>
        </div>

        <div className="edge absolute -bottom-3 -right-3 w-6 h-6 bg-white transform rotate-45"></div>
      </div>
    </Link>
  );
}

export default CharacterItem;
