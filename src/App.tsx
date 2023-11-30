import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Box maxW="1024px" mx={"auto"} my={2}>
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
            <GridItem bg={"violet"} area="aside">
              Aside
            </GridItem>
          </Show>
          <GridItem bg={"greenyellow"} area="main">
            Main
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
