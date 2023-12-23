import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSekeleton = () => {
  return (
    <Card
      borderRadius="5px"
      overflow="hidden"
      width={{ base: "200px", sm: "300px", md: "260px", lg: "300px" }}
      mx="auto"
      height="300px"
      gap="5px"
      marginBottom="15px"
      boxShadow="2xl"
    >
      <CardBody height="80%">
        <Skeleton></Skeleton>
      </CardBody>
      <SkeletonText padding="5px" />
    </Card>
  );
};

export default GameCardSekeleton;
