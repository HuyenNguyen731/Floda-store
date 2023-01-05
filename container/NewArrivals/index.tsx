import storeItems from "/data/items.json";
import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CardProduct from "../../component/CardProduct";

const NewArrivals = () => {
  return (
    <Box>
      <Text>NEW ARRIVALS</Text>
      <Text>Browse the huge variety of our products</Text>
      <Tabs isFitted variant="unstyled" defaultIndex={1}>
        <TabList>
          <Tab as={Button} variant="primary">
            One
          </Tab>
          <Tab as={Button}> Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              {storeItems.map((item: any) => (
                <CardProduct {...item} key={item.id} />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <CardProduct />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default NewArrivals;
