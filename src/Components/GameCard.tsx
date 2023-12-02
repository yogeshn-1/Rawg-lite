import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
      height="fit-content"
    >
      <Image src={game.background_image} />
      <CardBody backgroundColor="whitesmoke">
        <Text fontSize={20} color="black">
          {game.name}
        </Text>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
