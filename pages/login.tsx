import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import DefaultLayout from "../container/DefaultLayout";

const Login = () => {
  return (
    <DefaultLayout>
      <Center height="100vh">
        <Box>
          <Text textAlign="center" fontSize="xl" fontWeight="semibold">
            My Account
          </Text>
          <br />
          <Flex gap={25}>
            <Card p={10} border="1px solid #efefef" w={400}>
              <Text fontWeight="semibold" mb={4}>
                LOGIN
              </Text>
              <Text fontSize="14px">
                If you have an account with us, please log in.
              </Text>
              <br />
              <form>
                <Stack spacing={3}>
                  <Input type="text" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <br />
                  <Button w="100%" colorScheme="blue">
                    SIGN IN
                  </Button>
                  <Link href="">
                    <Text fontSize="14px" textAlign="right">
                      Forget your password?
                    </Text>
                  </Link>
                </Stack>
              </form>
            </Card>
            <Card p={10} border="1px solid #efefef" w={400}>
              <Text fontWeight="semibold" mb={4}>
                NEW CUSTOMER?
              </Text>
              <Text fontSize="14px">
                Registering for this site allows you to access your order status
                and history. We’ll get a new account set up for you in no time.
                For this will only ask you for information necessary to make the
                purchase process faster and easier
              </Text>
              <br />
              <Button w="100%" colorScheme="blue">
                CREATE AN ACCOUNT
              </Button>
            </Card>
          </Flex>
        </Box>
      </Center>
    </DefaultLayout>
  );
};

export default Login;
