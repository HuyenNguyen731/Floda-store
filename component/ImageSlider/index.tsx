import { Box, Button, Flex, Text } from "@chakra-ui/react";

type ImageSliderProp = {
  src: string;
  title: string;
  subTitle: string;
};

const ImageSlider = ({ src, title, subTitle }: ImageSliderProp) => {
  return (
    <Box>
      <img src={src} alt="" />
      <Box
        pos="absolute"
        top={0}
        right={0}
        left={0}
        bottom={0}
        opacity="0.6"
        backgroundImage="linear-gradient(to bottom,rgba(0,0,0,0) 0%,#000000 100%)"
      ></Box>
      <Flex
        position="absolute"
        bottom={"10%"}
        left={"50%"}
        style={{ transform: "translateX(-50%)" }}
        textAlign="center"
        color={"white"}
        flexDir="column"
        gap={6}
      >
        <Text fontWeight={600} fontSize="42px">
          {title}
        </Text>
        <Text fontWeight={600} fontSize="12px">
          {subTitle}
        </Text>
        <Box>
          <Button
            size="lg"
            bg={"black"}
            color={"white"}
            fontSize="14px"
            _hover={{ bg: "black", color: "white", opacity: 0.7 }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ImageSlider;
