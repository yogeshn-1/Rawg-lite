import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Prop {
  onSortOrderSelect: (order: string) => void;
  selectedOrder: string | null;
}

const SortGames = ({ onSortOrderSelect, selectedOrder }: Prop) => {
  const sortOrder = [
    { value: "name", label: "Name" },
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
    { value: "-released", label: "Release date" },
    { value: "", label: "Relevance" },
  ];
  const currentSort = sortOrder.find((order) => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by : {currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((item) => (
          <MenuItem
            onClick={() => onSortOrderSelect(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortGames;
