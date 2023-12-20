import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} ms="5px" />
      <Input
        placeholder="Search games ...."
        mx="5px"
        variant="filled"
        borderRadius="15px"
      ></Input>
    </InputGroup>
  );
};

export default SearchBox;
