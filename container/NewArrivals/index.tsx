import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

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
          <TabPanel>1</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default NewArrivals;
