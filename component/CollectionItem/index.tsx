import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Tooltip, Text } from "@chakra-ui/react";
import { useState } from "react";
import { formatCurrency } from "../../helpers/utils";
import { HeartIcon, ShoppingCartIcon } from "../../icons";

const CollectionItem = ({ imgUrl, name, price }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  function over() {
    setIsVisible(true);
  }
  function out() {
    setIsVisible(false);
  }

  return (
    <Box
      onMouseOver={over}
      onMouseOut={out}
      pos="relative"
      transition="0.5s all ease"
    >
      <img src={imgUrl} />
      <Center>
        <Box display={isVisible ? "block" : "none"}>
          <Box
            pos="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bg="white"
            opacity={0.8}
          />
          <Box
            position="absolute"
            display="grid"
            placeContent="center"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={1}
          >
            <Text textAlign="center">{name}</Text>
            <Text textAlign="center">{formatCurrency(price)}</Text>
            <Flex justifyContent="center" gap={3}>
              <Tooltip label="Add to wishlist" aria-label="A tooltip">
                <Button
                  background="white"
                  borderRadius="50%"
                  p="4px 3px"
                  _hover={{ background: "white" }}
                >
                  <HeartIcon />
                </Button>
              </Tooltip>
              <Tooltip label="Add to cart" aria-label="A tooltip">
                <Button
                  background="white"
                  borderRadius="50%"
                  p="4px 3px"
                  _hover={{ background: "white" }}
                >
                  <ShoppingCartIcon />
                </Button>
              </Tooltip>
              <Tooltip label="Quick View" aria-label="A tooltip">
                <Button
                  background="white"
                  borderRadius="50%"
                  p="4px 3px"
                  _hover={{ background: "white" }}
                >
                  <Search2Icon width={22} />
                </Button>
              </Tooltip>
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default CollectionItem;
