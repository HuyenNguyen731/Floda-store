import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ShoppingCartIcon } from "../../icons";

const CartList = () => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button variant="text" _hover={{ opacity: 0.6 }}>
          <ShoppingCartIcon />
          <Box
            w="16px"
            h="16px"
            fontSize="11px"
            borderRadius="50%"
            style={{
              background: "black",
              color: "white",
              position: "absolute",
              top: 0,
              right: "10%",
              pointerEvents: "none",
            }}
          >
            1
          </Box>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>List products</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CartList;
