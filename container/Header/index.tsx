import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Wrap,
} from "@chakra-ui/react";
import CartList from "../../component/CartList";
import NextChakraLink from "../../component/NextChakraLink";
import Search from "../../component/Search";
import { ShoppingCartIcon } from "../../icons";

const data = [
  {
    namePage: "Home",
    menuItem: ["Home page 1", "Home page 2", "Home page 3"],
  },
  {
    namePage: "Pages",
    menuItem: ["Home page 1", "Home page 2", "Home page 3"],
  },
  {
    namePage: "Shop",
    menuItem: ["Shop page 1", "Shop page 2", "Shop page 3"],
  },
  {
    namePage: "Blog",
    menuItem: ["Blog page 1", "Blog page 2", "Blog page 3"],
  },
  {
    namePage: "Contact us",
  },
];

const Header = () => {
  return (
    <Wrap p={6}>
      <Flex justifyContent="space-between" width="100%">
        <Box>
          <img src="./img/logo.png" width="150px" />
        </Box>
        <Flex justifyContent="center" width="100%">
          {data?.map((menu) => (
            <Popover key={menu.namePage} trigger="hover">
              <PopoverTrigger>
                <Button variant="text" fontSize="18px">
                  {menu.namePage}
                </Button>
              </PopoverTrigger>
              {menu?.menuItem && (
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                      {menu?.menuItem?.map((submenu) => (
                        <div key={submenu}>
                          <NextChakraLink href={submenu}>
                            {submenu}
                          </NextChakraLink>
                        </div>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              )}
            </Popover>
          ))}
        </Flex>
        <Flex gap={3}>
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
          <CartList />
          <Search />
        </Flex>
      </Flex>
    </Wrap>
  );
};

export default Header;
