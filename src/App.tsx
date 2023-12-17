import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
function App() {
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
              <GenreList></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main" py="10px">
            <Gamegrid />
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
