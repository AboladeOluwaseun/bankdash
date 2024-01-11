import React from "react";
import { cardDetails } from "./carddetails";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="px-6 py-9 lg:py-5 block lg:flex">
      {
        cardDetails.map((cardDetail) => (
          <Card key={cardDetail.id} cardDetail={cardDetail} />
        ))
      }
    </div>
  );
};

export default Cards;
