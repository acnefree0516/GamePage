import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/myLogo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="80px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
