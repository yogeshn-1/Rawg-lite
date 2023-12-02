import { Box, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const Gamegrid = () => {
  const { games, error } = useGames();
  const columns = { sm: 1, md: 2, lg: 3 };

  return (
    <>
      {error && <p>{error}</p>}

      {/* OLD CODE WITH UNEVEN SPACING */}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>

      <Box h="50px" background="grey" m="10px"></Box>

      <SimpleGrid columns={columns} spacing={5}>
        {/*Todo dynamically map colmns based on screen size */}
        {[...Array(columns.lg)].map((_, colIndex) => (
          <SimpleGrid key={colIndex} columns={1} spacing={3}>
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
