import { Box, Image, Text } from "@chakra-ui/react";

const CardCategory = ({ src, name }: any) => {
  return (
    <Box overflow="hidden">
      <Image
        src={src}
        alt="Green double couch with wooden legs"
        width="100%"
        height="100%"
        objectFit="contain"
        _hover={{
          transform: "scale(1.1)",
        }}
        transition="0.5s all ease"
      />
      <Text
        pos="absolute"
        bottom={8}
        left="50%"
        bg="white"
        p="5px 20px"
        style={{ transform: "translateX(-50%)" }}
      >
        {name}
      </Text>
    </Box>
  );
};

export default CardCategory;
