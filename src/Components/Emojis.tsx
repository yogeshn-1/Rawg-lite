import { BsPlusSquareFill } from "react-icons/bs";
import like from "../assets/like-svgrepo-com.svg";
import meh from "../assets/meh.png";
import bullseye from "../assets/on-target.svg";
import { Button, HStack, Image, ImageProps } from "@chakra-ui/react";
interface Prop {
  rating: number;
  rating_count: number;
}

const Emojis = ({ rating, rating_count }: Prop) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, boxSize: "30px", alt: "meh" },
    4: { src: like, boxSize: "25px", alt: "recommended" },
    5: { src: bullseye, boxSize: "35px", alt: "exceptional" },
  };
  return (
    <HStack>
      <Image {...emojiMap[rating]} />
      {rating_count > 100 && (
        <Button fontSize={16} rightIcon={<BsPlusSquareFill />} variant="ghost">
          {rating_count}
        </Button>
      )}
    </HStack>
  );
};

export default Emojis;
