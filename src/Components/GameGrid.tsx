import { Box, SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";
import { Genre } from "../hooks/useGenre";
interface Prop {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const Gamegrid = ({ selectedGenre, selectedPlatform }: Prop) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const columns = { sm: 1, md: 2, lg: 3 };
  const skeletons = [0];
  //todo Use an array of selected length to match card in game
  for (let i = 0; i < 20; i++) {
    skeletons.push(i);
  }
  return (
    <>
      {error && <p>{error}</p>}

      {/* OLD CODE WITH UNEVEN SPACING */}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {isLoading && skeletons.map((skel) => <GameCardSekeleton key={skel} />)}
        {data.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>

      <Box h="50px" background="grey" m="10px"></Box>

      <SimpleGrid columns={columns} spacing={5}>
        {/*Todo dynamically map colmns based on screen size */}
        {[...Array(columns.lg)].map((_, colIndex) => (
          <SimpleGrid key={colIndex} columns={1} spacing={3}>
            {isLoading &&
              skeletons.map((skel) => <GameCardSekeleton key={skel} />)}

            {data
              .filter((_, index) => index % columns.lg === colIndex)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
