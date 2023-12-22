import { Box, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";
import { GameQuery } from "../App";
interface Prop {
  gameQuery: GameQuery;
}

const Gamegrid = ({ gameQuery }: Prop) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const columns = { sm: 1, md: 2, lg: 3, xl: 4 };
  const skeletons = [0];
  //todo Use an array of selected length to match card in game
  for (let i = 1; i < 20; i++) {
    skeletons.push(i);
  }
  return (
    <>
      {error && <p>{error}</p>}

      {/* OLD CODE WITH UNEVEN SPACING */}

      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={5}>
        {isLoading && skeletons.map((skel) => <GameCardSekeleton key={skel} />)}
        {data.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>

      <Box h="50px" background="grey" m="10px"></Box>

      {/*Todo dynamically map colmns based on screen size */}
      <SimpleGrid columns={columns} spacing={5}>
        {[...Array(columns.xl)].map((_, colIndex) => (
          <SimpleGrid key={colIndex} columns={1} spacing={3}>
            {isLoading &&
              skeletons.map((skel) => <GameCardSekeleton key={skel} />)}

            {data
              .filter((_, index) => index % columns.xl === colIndex)
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
