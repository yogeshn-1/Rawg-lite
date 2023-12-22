import { Card, CardBody, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/get-croppedImage";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card
      borderRadius="5px"
      overflow="hidden"
      width={{ base: "70%", md: "100%" }}
      mx="auto"
      // my="5px"
      // height="fit-content"
    >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Text fontSize={26} fontWeight="bold">
          {game.name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
