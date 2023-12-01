import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card
      borderRadius="5px"
      overflow="hidden"
      width={{ sm: "80%", md: "100%", lg: "100%" }}
      mx="auto"
    >
      <Image src={game.background_image} />
      <CardBody>
        <Text>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
