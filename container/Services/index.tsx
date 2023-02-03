import { SimpleGrid } from "@chakra-ui/react";
import SubMenu from "../../component/Header/SubMenu";
import ServiceItem from "../../component/ServiceItem";

const data = [
  {
    src: "/img/free_shipping.png",
    heading: "FREE SHIPPING",
    subheading: "Free shipping all order",
  },
  {
    src: "/img/support247.png",
    heading: "SUPPORT 24/7",
    subheading: "Support 24 hours a day",
  },
  {
    src: "/img/money_back.png",
    heading: "MONEY RETURN",
    subheading: "30 days for free return",
  },
  {
    src: "/img/promotions.png",
    heading: "ORDER DISCOUNT",
    subheading: "On every order over $15",
  },
];

const Services = () => {
  return (
    <>
      <SimpleGrid columns={4} spacing={0}>
        {data?.map((item) => (
          <ServiceItem key={item.heading} info={item} />
        ))}
      </SimpleGrid>
      <br />
      <br />
    </>
  );
};

export default Services;
