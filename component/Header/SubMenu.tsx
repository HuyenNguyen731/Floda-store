import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import CardProductMenu from "./CardProductMenu";

const SubMenu = ({ data }: any) => {
  const [state, setSate] = useState<Number | null>(1);
  const menuParents = data?.flatMap((c: any) => c) || [];
  const menuChildren = data?.flatMap((c: any) => c.content) || [];
  const allItemMenu = menuParents.concat(menuChildren);

  return (
    <Box bg="#EAECF0" borderRadius={2}>
      <Flex>
        <Tabs
          bg="white"
          border="1px solid #ddd"
          style={{
            display: "flex",
            flexDirection: "column",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <TabList>
            {data?.map((item: any) => (
              <Tab
                key={item.id}
                onClick={() => {
                  setSate(item.id);
                }}
              >
                {item.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels style={{ flex: 1 }}>
            {data?.map((item: any) => (
              <>
                {item.content.map((sub: any) => (
                  <TabPanel key={sub?.id} p={0}>
                    <Button
                      color={state === sub?.id ? "blue.500" : "black"}
                      variant="text"
                      onClick={() => {
                        setSate(sub?.id as number);
                      }}
                    >
                      {sub?.name}
                    </Button>
                  </TabPanel>
                ))}
              </>
            ))}
          </TabPanels>
          <Box borderTop="1px solid #ddd" textAlign="center">
            <Button
              variant="link"
              color="blue.500"
              p={4}
              rightIcon={<ArrowForwardIcon />}
            >
              See all products
            </Button>
          </Box>
        </Tabs>
        <Box p={2}>
          {allItemMenu.map(
            (item: any) =>
              item.id === state && (
                <Box key={item.id}>
                  {item.products.map((i: any) => (
                    <>
                      <Text key={i}>{i}</Text>
                      <CardProductMenu />
                    </>
                  ))}
                </Box>
              )
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default SubMenu;
