import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/get-croppedImage";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack alignItems="center">
            <Image
              src={getCroppedImage(g.image_background)}
              width="35px"
              height="30px"
              borderRadius="5px"
            ></Image>
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
