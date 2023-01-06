import storeItems from "/data/items.json";
import {
  Box,
  Button,
  SimpleGrid,
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
      <Box textAlign="center">
        <Text>NEW ARRIVALS</Text>
        <Text>Browse the huge variety of our products</Text>
      </Box>
      <br />
      <Tabs isFitted variant="unstyled" defaultIndex={1}>
        <TabList width={300} alignItems="center" m="0 auto" gap={4}>
          <Tab as={Button}>Man</Tab>
          <Tab as={Button}>Women</Tab>
          <Tab as={Button}>Other</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={4} gap={6} p="0 40px">
              {storeItems.map((item: any) => (
                <CardProduct {...item} key={item.id} />
              ))}
            </SimpleGrid>
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
