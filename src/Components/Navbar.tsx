import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { useEffect } from "react";
import ColorSwitch from "./ChangeColorScheme";
const Navbar = () => {
  useEffect(() => {
    document.title = "rawg-lite";
  });
  return (
    <HStack m={1}>
      <Image src={logo}></Image>
      <Text>Hello</Text>
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
