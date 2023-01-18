import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  Image,
  Box,
} from "@chakra-ui/react";
import { useShoppingCart } from "../../context/shoppingCartContext";

const CardProduct = ({ id, name, price, imgUrl }: any) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card maxW="sm">
      <CardBody p={0}>
        <Image src={imgUrl} alt="Green double couch with wooden legs" />
        <Stack mt="6" spacing="3" textAlign="center">
          <Text fontSize="16px">{name}</Text>
          <Text color="red.300" fontSize="20px">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {quantity === 0 ? (
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        ) : (
          <Box>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </Button>
              <Button variant="text">{quantity} in cart</Button>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </Button>
            </ButtonGroup>
            <Button colorScheme="red" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          </Box>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
