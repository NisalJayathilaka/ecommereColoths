import React from "react";
import { SectionHandling } from "./SectionHandling/SectionHandling";
import { Card } from "../Card/Card";
import './NewArrival.css';


import DressOne from "../../assets/image/dressOne.webp";
import DressTwo from "../../assets/image/dressTwo.jpg";
import DressThree from "../../assets/image/dressThree.jpg";
import DressFour from "../../assets/image/dressFour.png";
import DressFive from "../../assets/image/dressFive.webp";
import Carousel from "react-multi-carousel";
import { responsive } from "../../Util/Section-constants";

const items = [
  {
    id: 1,
    imagePath: DressOne,
    title: "Floral Summer Dress",
  },
  {
    id: 2,
    imagePath: DressTwo,
    title: "Casual Denim Jacket",
  },
  {
    id: 3,
    imagePath: DressThree,
    title: "Elegant Evening Gown",
  },
  {
    id: 4,
    imagePath: DressFour,
    title: "Classic White Shirt",
  },
  {
    id: 5,
    imagePath: DressFive,
    title: "Trendy Leather Boots",
  },
    {
    id: 6,
    imagePath: DressOne,
    title: "Floral Summer Dress",
  },
    {
    id: 7,
    imagePath: DressTwo,
    title: "Casual Denim Jacket",
  }
];

export const NewArrivals = () => {
  return (
    <div>
      <SectionHandling
        title={
          <span className="pl-2 border-l-5 border-black">New Arrivals</span>
        }
      />
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={false}
        partialVisbile={false}
        itemClass={'reacr-slider-custom-item'}
        className="px-10"
      >
        {items.map((item) => (
          <Card key={item.id} imagePath={item.imagePath} title={item.title} />
        ))}
      </Carousel>
    </div>
  );
};
