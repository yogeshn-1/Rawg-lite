import { Box } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSekeleton";
import { GameQuery } from "../App";
interface Prop {
  gameQuery: GameQuery;
}

const Gamegrid = ({ gameQuery }: Prop) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [0];
  for (let i = 1; i < 20; i++) {
    skeletons.push(i);
  }
  if (error) return <p>{error}</p>;

  return (
    <Box
      maxW={{ base: "300px", sm: "max-content" }}
      mx="auto"
      sx={{
        columns: { base: "1", md: "2", lg: "3", xl: "4" },
        columnGap: "5",
      }}
    >
      {isLoading && skeletons.map((skel) => <GameCardSekeleton key={skel} />)}
      {!isLoading && data.map((g) => <GameCard key={g.id} game={g} />)}
    </Box>
  );
};

export default Gamegrid;
