import { Button, Flex, Link } from "@chakra-ui/react";

const HeaderTop = () => {
  return (
    <>
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
          <Link href="tel:+440 0(111) 044 833">+440 0(111) 044 833</Link>
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
    </>
  );
};

export default HeaderTop;
