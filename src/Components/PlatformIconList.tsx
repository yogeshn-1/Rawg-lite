import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

interface Prop {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Prop) => {
  const IconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack my={2}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color="gray.500"></Icon>
      ))}
      {/* {platforms.map((platform) => (
        <Text>{platform.slug}</Text>
      ))} */}
    </HStack>
  );
};

export default PlatformIconList;
