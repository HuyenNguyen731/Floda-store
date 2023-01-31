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
import CardProduct from "../../component/CardProduct";
import ProductSlider from "../../component/ProductSlider";

const NewArrivals = () => {
  return (
    <Box>
      <br />
      <Box textAlign="center">
        <Text fontSize={"18px"}>NEW ARRIVALS</Text>
        <Text>Browse the huge variety of our products</Text>
      </Box>
      <br />
      <br />
      <Tabs isFitted variant="unstyled" defaultIndex={1}>
        <TabList width={300} alignItems="center" m="0 auto" gap={4}>
          <Tab as={Button} bg="transparent">
            Man
          </Tab>
          <Tab as={Button} bg="transparent">
            Women
          </Tab>
          <Tab as={Button} bg="transparent">
            Other
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProductSlider />
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
