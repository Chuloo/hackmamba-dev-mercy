import React from "react";
import texture from "../images/texture.png";
import union from "../images/union.svg";
import Cards from "./Cards";

export default function Product() {
  return (
    <section
      className="bg-productSectionBg rounded-[40px] mt-[200px] mx-[24px] px-[111px] py-[200px] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <img
        src={union}
        alt="arrow"
        className="absolute left-[111px] top-[248px]"
      />
      <h2 className="max-w-[830px] ml-[80px]">
        Let’s Distil Your Product's Essence Through Crisp Technical Content
      </h2>
      <p className="text-white max-w-[635px] ml-[auto] mt-[80px]">
        Content production is vital to business processes to enhance customer
        acquisition and retention capacities, minimize operating costs and
        enable better user decision-making.
      </p>

      <div>
        <Cards  />
      </div>
      <div>
      </div>
    </section>
  );
}
