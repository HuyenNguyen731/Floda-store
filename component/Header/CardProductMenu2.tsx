import { Box, Button, Card, Flex, Image, Link, Text } from "@chakra-ui/react";

const CardProductMenu2 = () => {
  return (
    <Card p={4} border="1px solid #efefef">
      <Flex gap={4} direction="column">
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
          <br />
          <br />
          <Link href="/">
            <Button
              fontSize="sm"
              fontWeight="semibold"
              colorScheme="blue"
              w="100%"
            >
              See more
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardProductMenu2;
