import { Switch, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      colorScheme="blue"
      whiteSpace="nowrap"
    >
      Dark mode
    </Switch>
  );
};

export default ColorSwitch;
