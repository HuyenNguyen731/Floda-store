import { Card, CardBody, Image, Text } from "@chakra-ui/react";

const CardCategory = ({ src, name }: any) => {
  return (
    <Card maxW="sm">
      <CardBody p="0 10px">
        <Image
          src={src}
          alt="Green double couch with wooden legs"
          height={450}
          width="100%"
          objectFit="contain"
        />
        <Text
          pos="absolute"
          bottom={14}
          left="50%"
          bg="white"
          p="5px 20px"
          style={{ transform: "translateX(-50%)" }}
        >
          {name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CardCategory;
