import { Switch, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}>
      Dark mode
    </Switch>
  );
};

export default ColorSwitch;
