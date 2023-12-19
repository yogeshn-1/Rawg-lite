import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSekeleton = () => {
  return (
    <Card
      borderRadius="5px"
      overflow="hidden"
      width={["400px", "350px", "300px"]}
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
