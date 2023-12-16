import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";

const Gamegrid = () => {
  const { games, error, isLoading } = useGames();
  const columns = { sm: 1, md: 2, lg: 3 };
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}

      {/* OLD CODE WITH UNEVEN SPACING */}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {isLoading && skeletons.map((skel) => <GameCardSekeleton key={skel} />)}
        {games.map((g) => (
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

            {games
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
