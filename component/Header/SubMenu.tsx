import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
  Text,
  Divider,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import CartProductMenu from "./CartProductMenu";

const data = [
  {
    id: 1,
    name: "tab 1",
    products: ["product 1 tab 1", "product 2 tab 1"],
    content: [
      {
        id: 11,
        name: "Ultimate Program ",
        products: [
          "McKinsey PSG Simulation 1",
          "Case Interview End-to-End 1",
          "BCG Casey Simulation 1",
        ],
        content: [],
      },
      {
        id: 12,
        name: "Case Interview Program 1",
        products: ["Ultimate Management Consulting Program 1"],
      },
      {
        id: 13,
        name: "MBB Tests",
        products: [, "Case Interview End-to-End 1", "BCG Casey Simulation 1"],
      },
    ],
  },
  {
    id: 2,
    name: "tab 2",
    products: ["product 1 tab 2", "product 2 tab 2"],
    content: [
      {
        id: 21,
        name: "Deductive Reasoning",
        products: ["Aptitude Tests Package 2"],
      },
      {
        id: 22,
        name: "Inductive Reasoning",
        products: ["Numerical Reasoning Test 2"],
      },
      ,
    ],
  },
];

const SubMenu = () => {
  const [state, setSate] = useState<Number | null>(1);
  const menuParents = data?.flatMap((c) => c) || [];
  const menuChildren = data?.flatMap((c) => c.content) || [];
  const allItemMenu = menuParents.concat(menuChildren);

  return (
    <Box>
      <Flex>
        <Tabs>
          <TabList>
            {data?.map((item) => (
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
          <TabPanels>
            {data?.map((item) => (
              <>
                {item.content.map((sub, index) => (
                  <TabPanel key={sub?.id}>
                    <Button
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
        </Tabs>
        <Center height="200px" padding="0 20px">
          <Divider orientation="vertical" />
        </Center>
        <Box>
          {allItemMenu.map(
            (item) =>
              item.id === state && (
                <Box key={item.id}>
                  {item.products.map((i) => (
                    <>
                      <Text key={i}>{i}</Text>
                      <CartProductMenu />
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
