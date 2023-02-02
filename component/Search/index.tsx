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
  Link,
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
              <Link href="" textDecoration="underline">
                Jean
              </Link>
              <Link href="" textDecoration="underline">
                Dress
              </Link>
              <Link href="" textDecoration="underline">
                Ring
              </Link>
              <Link href="" textDecoration="underline">
                Necklac
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Search;
