import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}
const CriticScore = ({ score }: Prop) => {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} px={1}>
      {score}
    </Badge>
  );
};

export default CriticScore;
