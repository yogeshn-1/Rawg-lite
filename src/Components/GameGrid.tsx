import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const Gamegrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
