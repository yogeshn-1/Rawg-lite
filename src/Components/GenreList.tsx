import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/get-croppedImage";
interface Prop {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Prop) => {
  const { data, isLoading } = useGenre();
  if (isLoading) return <Spinner />;
  else
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
              <Link fontSize="lg" onClick={() => onSelectGenre(g)}>
                {g.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
};

export default GenreList;
