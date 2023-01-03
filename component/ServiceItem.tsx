import { Flex, Text } from "@chakra-ui/react";

const ServiceItem = ({ info }: any) => {
  return (
    <Flex>
      <img src={info.src} alt="" />
      <div>
        <Text>{info.heading}</Text>
        <Text>{info.subheading}</Text>
      </div>
    </Flex>
  );
};

export default ServiceItem;
