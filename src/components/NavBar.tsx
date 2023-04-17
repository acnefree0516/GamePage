import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/myLogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="80px" /> {/*  cannot just use the path  */}
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
