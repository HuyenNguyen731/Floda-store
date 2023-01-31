import { Flex, Image } from "@chakra-ui/react";

const data = [
  {
    id: "1",
    src: "/img/b1.avif",
  },
  {
    id: "2",
    src: "/img/b2.avif",
  },
  {
    id: "3",
    src: "/img/b3.avif",
  },
  {
    id: "4",
    src: "/img/b4.avif",
  },
  {
    id: "5",
    src: "/img/b5.webp",
  },
  {
    id: "6",
    src: "/img/b6.avif",
  },
];
const ListBrand = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center">
      {data?.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt="Green double couch with wooden legs"
        />
      ))}
    </Flex>
  );
};

export default ListBrand;
