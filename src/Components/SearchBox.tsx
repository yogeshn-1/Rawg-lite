import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Prop {
  onSearch: (searchText: string) => void;
}
const SearchBox = ({ onSearch }: Prop) => {
  const reference = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (reference.current) onSearch(reference.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} ms="5px" />
        <Input
          ref={reference}
          placeholder="Search games ...."
          mx="5px"
          variant="filled"
          borderRadius="15px"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchBox;
