import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Prop {
  headingTitle: GameQuery;
}
const GameHeading = ({ headingTitle }: Prop) => {
  const heading = `${headingTitle?.platform?.name || ""} ${
    headingTitle?.genre?.name || ""
  }`;
  return (
    <Heading as="h1" mb="7px">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
