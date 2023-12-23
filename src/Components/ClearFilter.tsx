import { Button } from "@chakra-ui/react";
interface Prop {
  onClear: () => void;
  btnDisable: boolean;
}
const ClearFilter = ({ onClear, btnDisable }: Prop) => {
  return (
    <Button onClick={onClear} isDisabled={btnDisable}>
      Clear All Filter
    </Button>
  );
};

export default ClearFilter;
