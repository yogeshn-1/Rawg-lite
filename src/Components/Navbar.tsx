import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/icon.png";
import { useEffect } from "react";
import ColorSwitch from "./ChangeColorScheme";
import SearchBox from "./SearchBox";
interface Prop {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Prop) => {
  useEffect(() => {
    document.title = "rawg-lite";
  });
  return (
    <HStack m={1} p="10px">
      <Image src={icon} boxSize="60px" borderRadius="15px"></Image>
      <SearchBox onSearch={onSearch} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
