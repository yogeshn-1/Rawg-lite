import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const setGenre = () => {};
  return (
    <div>
      <Box maxW="1200px" mx="auto" my={2}>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            md: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <Navbar />
          </GridItem>
          <Show above="md">
            <GridItem area="aside" px="10px" my="10px">
              <GenreList
                selectedGenre={selectedGenre}
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main" py="10px">
            <PlatformSelector />
            <Gamegrid selectedGenre={selectedGenre} />
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
