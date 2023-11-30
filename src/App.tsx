import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem bg={"blue"} area="nav">
          Nav 1
        </GridItem>
        <Show above="md">
          <GridItem bg={"red"} area="nav">
            Nav 2
          </GridItem>
        </Show>
        <Show above="md">
          <GridItem bg={"violet"} area="aside">
            Aside
          </GridItem>
        </Show>
        <GridItem bg={"greenyellow"} area="main">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
