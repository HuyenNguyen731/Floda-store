import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";

const data = [
  {
    namePage: "Home",
    menuItem: ["Home page 1", "Home page 2", "Home page 3"],
  },
  {
    namePage: "Shop",
    menuItem: ["Shop page 1", "Shop page 2", "Shop page 3"],
  },
  {
    namePage: "Contact us",
  },
];

const Header = () => {
  return (
    <Wrap>
      <Flex justifyContent="space-between" width="100%" p={6}>
        <Flex alignItems="center" gap={4}>
          <Box>
            <img src="./img/logo.png" width="150px" />
          </Box>
          <Box>
            <Text>Call Us</Text>
            <Text>+91-234-567-8900</Text>
          </Box>
        </Flex>
        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            <Select placeholder="Select option" w="200px">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Input placeholder="Basic usage" w="300px" />
          </Stack>
        </Flex>
      </Flex>
      <Flex justifyContent="center" width="100%">
        {data?.map((menu) => (
          <Menu key={menu.namePage}>
            <MenuButton as={Button}>{menu.namePage}</MenuButton>
            <MenuList>
              {menu?.menuItem?.map((submenu) => (
                <MenuItem key={submenu}>{submenu}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </Flex>
    </Wrap>
  );
};

export default Header;
