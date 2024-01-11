import React from "react";
import chip from "../../../assets/main/chip.svg";
import cardlogo from "../../../assets/main/cardlogo.svg";
const Card = ({ cardDetail }) => {
  return (
    <div
      className={`${
        cardDetail.id % 2 !== 0 ? "bg-cardBg text-white" : "bg-white text-black"
      }   px-5 py-4 rounded-[1.25rem]  relative`}
    >
      <div className=" absolute w-[14.4375rem] h-[3.1875rem] bg-cardBg2 left-0 bottom-0 right-0 rounded-l-[1.25rem] rounded-r-[1.25rem]"></div>
      <div className=" flex items-start justify-between">
        <div>
          <p className=" text-[0.6875rem] opacity-75">BALANCE</p>
          <p className=" text-[1rem]">${cardDetail.balance}</p>
        </div>
        <img className=" h-[1.8rem] w-[1.8rem]" src={chip} alt="chip-image" />
      </div>
      <div className=" flex items-center mt-5 gap-10">
        <div>
          <p className="text-[0.6875rem] opacity-75">CARD HOLDER</p>
          <p className=" text-[0.8125rem]">{cardDetail.cardHolder}</p>
        </div>
        <div>
          <p className="text-[0.6875rem] opacity-75">VALID THRU</p>
          <p className=" text-[0.8125rem]">{cardDetail.expiryDate}</p>
        </div>
      </div>
      <div className=" flex items-center justify-between mt-4  ">
        <p className=" text-[0.9375rem]">{cardDetail.cardNumber}</p>
        <img src={cardlogo} alt="cardtype-logo" />
      </div>
    </div>
  );
};

export default Card;
