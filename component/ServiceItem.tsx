import { Flex, Text } from "@chakra-ui/react";

const ServiceItem = ({ info }: any) => {
  return (
    <Flex justifyContent="center" gap={4}>
      <img src={info.src} alt="" />
      <div>
        <Text>{info.heading}</Text>
        <Text>{info.subheading}</Text>
      </div>
    </Flex>
  );
};

export default ServiceItem;
