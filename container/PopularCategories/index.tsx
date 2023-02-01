import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardCategory from "../../component/CardCategory";

const data = [
  {
    id: "1",
    src: "/img/c1.webp",
    name: "BAGS",
  },
  {
    id: "2",
    src: "/img/c2.webp",
    name: "FASHION",
  },
  {
    id: "3",
    src: "/img/c3.webp",
    name: "COSMETIC",
  },
  {
    id: "4",
    src: "/img/c4.webp",
    name: "ACCESSTORIES",
  },
  {
    id: "5",
    src: "/img/c5.webp",
    name: "JEWELRY",
  },
  {
    id: "6",
    src: "/img/c2.webp",
    name: "FASHION",
  },
];

const PopularCategories = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },
  });

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {data.map((item: any) => (
          <div
            className="keen-slider__slide"
            key={item.id}
            style={{ height: "auto" }}
          >
            <CardCategory {...item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
