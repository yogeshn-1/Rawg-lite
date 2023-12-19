import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
interface Prop {
  onSelectPlatform: (plat: Platform) => void;
  platform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, platform }: Prop) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((plat) => (
          <MenuItem key={plat.id} onClick={() => onSelectPlatform(plat)}>
            {plat.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
