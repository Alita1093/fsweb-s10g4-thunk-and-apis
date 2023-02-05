import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10">When u're bored You can {data.activity}</p>
      <p className="text-2xl pb-2">Type: {data.type}</p>
      <p className="text-2xl pb-2">Participants: {data.participants}</p>
      <p className="text-2xl pb-2">Price: {data.price}</p>
    </div>
  );
}

export default Item;
