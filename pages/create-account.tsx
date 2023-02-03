import {
  Box,
  Text,
  Input,
  Center,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import DefaultLayout from "../container/DefaultLayout";

const CreateAccount = () => {
  return (
    <DefaultLayout>
      <Center height="100vh">
        <Box>
          <Text textAlign="center" fontSize="xl">
            Create an accoount
          </Text>
          <Box w={500} mt={6}>
            <form>
              <Stack spacing={3}>
                <Input type="text" placeholder="Frist name" />
                <Input type="text" placeholder="Last name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Checkbox>
                  Subscribe to stay updated with new products and offers!
                </Checkbox>
                <br />
                <Button w="100%" colorScheme="blue">
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Center>
    </DefaultLayout>
  );
};

export default CreateAccount;
