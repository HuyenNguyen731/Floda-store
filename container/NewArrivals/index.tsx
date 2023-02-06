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
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import CardProduct from "../../component/CardProduct";

const NewArrivals = () => {
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  const [searchStr, setSearchStr] = useState<string>("");

  // http://localhost:4000/categories/100/products

  const { data, isLoading } = useQuery(
    "getProducts",
    () => {
      return axios.get(" http://localhost:4000/products");
    },
    {
      select: (res) => {
        const _ = require("lodash");
        const dataNew = res?.data?.map((i) => i);
        return _.values(_.groupBy(dataNew, (item: any) => item.categoryId));
      },
    }
  );

  const onChangeTab = async (key: number) => {
    setIndex(key);

    console.log(key, "key");

    // await router.push({
    //   query: removeObjectEmptyValue({
    //     ...router.query,
    //     tab: key,
    //     isArchived: key === "bin",
    //     keyword: "",
    //   }),
    // });
  };

  return (
    <Box>
      <br />
      <Box textAlign="center">
        <Text fontSize={"18px"}>NEW ARRIVALS</Text>
        <Text>Browse the huge variety of our products</Text>
      </Box>
      <br />
      <br />
      <Tabs isFitted variant="unstyled" defaultIndex={1} onChange={onChangeTab}>
        <TabList width={300} alignItems="center" m="0 auto" gap={4}>
          <Tab as={Button} bg="transparent">
            Women
          </Tab>
          <Tab as={Button} bg="transparent">
            Man
          </Tab>
          <Tab as={Button} bg="transparent">
            Other
          </Tab>
        </TabList>
        {!isLoading && (
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={4} spacing={10}>
                {data[index]?.map((item: any) => (
                  <CardProduct key={item.id} {...item} />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={4} spacing={10}>
                {data[index]?.map((item: any) => (
                  <CardProduct key={item.id} {...item} />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={4} spacing={10}>
                {data[index]?.map((item: any) => (
                  <CardProduct key={item.id} {...item} />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        )}
      </Tabs>
    </Box>
  );
};

export default NewArrivals;
