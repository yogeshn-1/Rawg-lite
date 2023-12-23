import { HStack, Heading, Image, Link, List, ListItem } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/get-croppedImage";
interface Prop {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Prop) => {
  const { data } = useGenre();

  return (
    <>
      <Heading marginBottom="5px"> Genres</Heading>
      <List>
        {data.map((genreList) => (
          <ListItem key={genreList.id} paddingY="5px">
            <HStack alignItems="center">
              <Image
                src={getCroppedImage(genreList.image_background)}
                width="35px"
                height="30px"
                borderRadius="5px"
              ></Image>
              <Link
                fontWeight={
                  genreList.id == selectedGenre?.id ? "bold" : "normal"
                }
                fontSize="lg"
                onClick={() => onSelectGenre(genreList)}
              >
                {genreList.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
