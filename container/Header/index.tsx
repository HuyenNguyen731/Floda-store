import {
  Text,
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
import { useCallback, useEffect, useState } from "react";
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
  const [check, setCheck] = useState(true);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY > 50) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Wrap>
      <Flex
        bgColor="black"
        width="100%"
        color="white"
        alignItems="center"
        justifyContent="space-between"
        fontSize="12px"
        p={"0 50px"}
      >
        <Flex>
          <Text>+440 0(111) 044 833</Text>
        </Flex>
        <Flex>
          <Button
            fontSize="12px"
            bg="transparent"
            _hover={{ background: "transparent", opacity: 0.8 }}
          >
            LOGIN
          </Button>
          <Button
            fontSize="12px"
            bg="transparent"
            _hover={{ background: "transparent", opacity: 0.8 }}
          >
            CREATE ACCOUNT
          </Button>
          <Button
            fontSize="12px"
            bg="transparent"
            _hover={{ background: "transparent", opacity: 0.8 }}
          >
            WISHLIST
          </Button>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        p="8px 50px 8px"
        alignItems="center"
        transition="0.3s all"
        justifyContent="space-between"
        style={
          check
            ? {
                position: "absolute",
                top: "40px",
                margin: 0,
                left: 0,
                right: 0,
              }
            : {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                background: "white",
                margin: 0,
              }
        }
        zIndex={1}
      >
        <Box>
          <img src="./img/logo.avif" width="150px" />
        </Box>
        <Flex justifyContent="center" width="100%">
          {data?.map((menu) => (
            <Popover key={menu.namePage} trigger="hover">
              <PopoverTrigger>
                <Button
                  variant="text"
                  fontSize="14px"
                  textTransform="uppercase"
                >
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
          <Search />
          <CartList />
        </Flex>
      </Flex>
    </Wrap>
  );
};

export default Header;
