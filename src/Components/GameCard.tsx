import { Card, CardBody, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

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
      <CardBody>
        <Text fontSize={22} fontWeight="bold">
          {game.name}
        </Text>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
