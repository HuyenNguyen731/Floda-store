import { Wrap } from "@chakra-ui/react";

import HeaderTop from "../../component/Header/HeaderTop";
import Navigation from "../../component/Header/Navigation";

const Header = () => {
  return (
    <Wrap>
      <HeaderTop />
      <Navigation />
    </Wrap>
  );
};

export default Header;
