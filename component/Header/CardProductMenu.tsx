import { Box, Card, Flex, Image, Link, Spacer, Text } from "@chakra-ui/react";

const CardProductMenu = () => {
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
          <Link href="/" fontSize="sm" fontWeight="semibold">
            See more
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardProductMenu;
