import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSekeleton = () => {
  return (
    <Card
      borderRadius="5px"
      overflow="hidden"
      width={{ base: "200px", sm: "300px", md: "300px", lg: "270px" }}
      mx="auto"
      height="300px"
      gap="5px"
      my="5px"
    >
      <CardBody height="80%">
        <Skeleton></Skeleton>
      </CardBody>
      <SkeletonText padding="5px" />
    </Card>
  );
};

export default GameCardSekeleton;
