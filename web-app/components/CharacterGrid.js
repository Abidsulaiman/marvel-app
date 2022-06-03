import React from "react";

function CharacterGrid({ items }) {
  return (
    <div className="lg:grid lg:grid-cols-5 lg:gap-4">
      {items?.map((hero) => (
        <div className="shadow rounded" key={hero?.id}>
          <img
            src={hero?.thumbnail?.path + "/portrait_xlarge.jpg"}
            alt={hero?.name}
            className="w-full h-44 object-cover"
          />
          <h3> {hero?.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default CharacterGrid;
