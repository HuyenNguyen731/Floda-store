import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import NextChakraLink from "../NextChakraLink";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        variant="text"
        fontSize="xl"
        _hover={{ opacity: 0.6 }}
      >
        <SearchIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>What are you looking for?</DrawerHeader>
          <DrawerBody>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>

            <Flex p="20px 0" gap={2}>
              <Text>Popular Searches:</Text>

              <NextChakraLink href="" textDecoration="underline">
                Jean
              </NextChakraLink>
              <NextChakraLink href="" textDecoration="underline">
                Dress
              </NextChakraLink>
              <NextChakraLink href="" textDecoration="underline">
                Ring
              </NextChakraLink>
              <NextChakraLink href="" textDecoration="underline">
                Necklac
              </NextChakraLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Search;
