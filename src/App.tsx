import { Box, Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortGames from "./Components/SortGames";
import GameHeading from "./Components/GameHeading";
import ClearFilter from "./Components/ClearFilter";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [btnClear, setBtn] = useState(true);
  return (
    <div>
      <Box mx="auto" my={2}>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            md: `"nav nav" "aside main"`,
          }}
          templateRows={"80px 1fr"}
          templateColumns={{
            sm: "unset",
            md: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <Navbar
              onSearch={(searchText) => {
                setGameQuery({ ...gameQuery, searchText });
                setBtn(false);
              }}
            />
          </GridItem>
          <Show above="md">
            <GridItem area="aside" px="10px" my="10px">
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => {
                  setGameQuery({ ...gameQuery, genre });
                  setBtn(false);
                }}
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main" padding="10px">
            <VStack alignItems="flex-start">
              <GameHeading headingTitle={gameQuery}></GameHeading>
              <HStack spacing={5} marginBottom={5}>
                <PlatformSelector
                  platform={gameQuery.platform}
                  onSelectPlatform={(platform) => {
                    setGameQuery({ ...gameQuery, platform });
                    setBtn(false);
                  }}
                />
                <SortGames
                  onSortOrderSelect={(sortOrder) => {
                    setGameQuery({ ...gameQuery, sortOrder });
                    setBtn(false);
                  }}
                  selectedOrder={gameQuery.sortOrder}
                />
                <Show above="md">
                  <ClearFilter
                    btnDisable={btnClear}
                    onClear={() => {
                      setGameQuery({} as GameQuery);
                      setBtn(true);
                    }}
                  />
                </Show>
              </HStack>
            </VStack>
            <Gamegrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
