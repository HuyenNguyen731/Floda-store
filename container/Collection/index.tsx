import { Box, Button, Center, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import CollectionItem from "../../component/CollectionItem";

const Collection = () => {
  const { data } = useQuery("getListCollection", () => {
    return axios.get("http://localhost:4000/collection");
  });

  return (
    <Box>
      <br />
      <Box textAlign="center">
        <Text fontSize={"18px"}>FEATURED COLLECTION</Text>
        <Text>Our most popular products based on sales</Text>
      </Box>
      <br />
      <br />
      <SimpleGrid columns={3} spacing={10}>
        {data?.data?.map((item: any) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </SimpleGrid>
      <br />
      <Center>
        <Button>SHOP ALL</Button>
      </Center>
    </Box>
  );
};

export default Collection;
