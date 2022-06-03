import React from "react";
import CharacterItem from "./CharacterItem";

function CharacterGrid({ items }) {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {items?.map((hero) => (
        <CharacterItem hero={hero} key={hero?.id} />
      ))}
    </div>
  );
}

export default CharacterGrid;
