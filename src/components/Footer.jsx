import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack p={3} bg="gray.900" justify="center" position='fixed' w='100%' bottom={0}>
      <Text color="white">
        Designed and developed by{" "}
        <Link href="https://github.com/PinkMoon25" isExternal color="cyan.200">
          Tushar <ExternalLinkIcon />
        </Link>{" "}
      </Text>
    </HStack>
  );
};

export default Footer;
