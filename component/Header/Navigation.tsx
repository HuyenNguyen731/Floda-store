import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import CartList from "../CartList";
import Search from "../Search";
import MenuHeader from "./MenuHeader";

const Navigation = () => {
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
    <>
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
          <Link href="/">
            <img src="./img/logo.avif" width="150px" />
          </Link>
        </Box>
        <Flex justifyContent="center" width="100%">
          <MenuHeader />
        </Flex>
        <Flex gap={3}>
          <Search />
          <CartList />
        </Flex>
      </Flex>
    </>
  );
};

export default Navigation;
