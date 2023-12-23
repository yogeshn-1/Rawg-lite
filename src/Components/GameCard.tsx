import { Card, CardBody, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/get-croppedImage";
import Emojis from "./Emojis";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card
      borderRadius="10px"
      overflow="hidden" //to make border radius visible
      width={{ base: "80%", md: "100%" }}
      mx="auto" //for single column the card shoud be in middle.
      height="fit-content"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
      marginBottom="15px"
      boxShadow="2xl"
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
        <Emojis rating={game.rating_top} rating_count={game.ratings_count} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
