import {
  Button,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import CardProductMenu2 from "./CardProductMenu2";
import SubMenu from "./SubMenu";

const homePage = [
  {
    id: 1,
    name: "Management Consulting",
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
    name: "Apitude Test",
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

const shopPage = [
  {
    id: 1,
    name: "Shop Management",
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
    name: "Apitude Test",
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

const MenuHeader = () => {
  return (
    <>
      <Popover trigger="click">
        <PopoverTrigger>
          <Button variant="text" fontSize="14px" textTransform="uppercase">
            Home
          </Button>
        </PopoverTrigger>

        <Portal>
          <PopoverContent minW={880}>
            <PopoverArrow />
            <PopoverBody p={0}>
              <SubMenu data={homePage} />
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <Popover trigger="click">
        <PopoverTrigger>
          <Button variant="text" fontSize="14px" textTransform="uppercase">
            Shop
          </Button>
        </PopoverTrigger>

        <Portal>
          <PopoverContent minW={880}>
            <PopoverArrow />
            <PopoverBody p={0}>
              <SubMenu data={shopPage} />
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <Popover trigger="click">
        <PopoverTrigger>
          <Button variant="text" fontSize="14px" textTransform="uppercase">
            Pages
          </Button>
        </PopoverTrigger>

        <Portal>
          <PopoverContent minW={600} px={2}>
            <PopoverArrow />
            <PopoverBody>
              <Flex gap={25}>
                <CardProductMenu2 />
                <CardProductMenu2 />
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <Popover trigger="click">
        <PopoverTrigger>
          <Link href="/blog">
            <Button variant="text" fontSize="14px" textTransform="uppercase">
              Blog
            </Button>
          </Link>
        </PopoverTrigger>
      </Popover>

      <Popover trigger="click">
        <PopoverTrigger>
          <Link href="/contact">
            <Button variant="text" fontSize="14px" textTransform="uppercase">
              Contact Us
            </Button>
          </Link>
        </PopoverTrigger>
      </Popover>
    </>
  );
};

export default MenuHeader;
