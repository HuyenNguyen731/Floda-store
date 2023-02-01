import { Box, Button, Card, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import NextChakraLink from "../NextChakraLink";

const CartProductMenu = () => {
  return (
    <Card p={4} border="1px solid #efefef">
      <Flex gap={4}>
        <Image
          w={240}
          h={136}
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Flex direction="column">
          <Box>
            <Text fontSize="md" fontWeight="semibold">
              McKinsey PSG Simulation
            </Text>
            <Text fontSize="sm">App-based simlation for Mckinsey PSG</Text>
          </Box>
          <Spacer />
          <NextChakraLink
            href="/"
            as={Button}
            fontSize="sm"
            fontWeight="semibold"
          >
            See more
          </NextChakraLink>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CartProductMenu;
