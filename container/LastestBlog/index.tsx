import { Box, Flex, Text } from "@chakra-ui/react";

const LastestBlog = () => {
  return (
    <Box w="50%">
      <Flex>
        <Box flex={1} w={500} h={500}>
          <img src="/img/blog-1.webp" alt="" width="100%" height="100%" />
        </Box>
        <Box flex={1} bg="white">
          <Text fontSize="24px">
            Keep Yourself Warm This Winter With Our Must-Have Travel Essentials
          </Text>
          <Text>December 15, 2021</Text>
          <Text>
            As we’re almost headed into December and it’s started to really cool
            down, we can safely say that winter has come.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LastestBlog;
