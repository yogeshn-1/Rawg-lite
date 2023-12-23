import { Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
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
  const columns = { sm: 1, md: 2, lg: 3, xl: 4 };
  const columnCount = useBreakpointValue(columns) || 1;
  const rowCount = Math.ceil(data.length / columnCount);

  //todo Use an array of selected length to match card in game
  for (let i = 1; i < 20; i++) {
    skeletons.push(i);
  }
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* CODE WITH UNEVEN SPACING */}
      {/* 
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={5} autoFlow="dense">
        {isLoading && skeletons.map((skel) => <GameCardSekeleton key={skel} />)}
        {data.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid> */}

      {/* CODE WITH EVEN SPACING CARDS FILLING OUT THE GAP */}

      {/*Todo set the row gap to same for all coulumns */}
      <SimpleGrid columns={columnCount} spacing={5}>
        {[...Array(columnCount)].map((_, colIndex) => (
          <SimpleGrid key={colIndex} columns={1} rowGap={5}>
            {isLoading &&
              skeletons.map((skel) => <GameCardSekeleton key={skel} />)}

            {data
              .filter((_, index) => index % columnCount === colIndex)
              .map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            {Array.from({ length: rowCount - (data.length % columnCount) }).map(
              (_, i) => (
                <Box key={`empty-${i}`} style={{ visibility: "hidden" }} />
              )
            )}
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
