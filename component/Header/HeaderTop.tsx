import { PhoneIcon } from "@chakra-ui/icons";
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
        <Flex alignItems="center" gap={2}>
          <PhoneIcon />
          <Link href="tel:+440 0(111) 044 833">+440 0(111) 044 833</Link>
        </Flex>
        <Flex>
          <Link href="/login">
            <Button
              fontSize="12px"
              bg="transparent"
              _hover={{ background: "transparent", opacity: 0.8 }}
            >
              LOGIN
            </Button>
          </Link>
          <Link href="/create-account">
            <Button
              fontSize="12px"
              bg="transparent"
              _hover={{ background: "transparent", opacity: 0.8 }}
            >
              CREATE ACCOUNT
            </Button>
          </Link>

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
