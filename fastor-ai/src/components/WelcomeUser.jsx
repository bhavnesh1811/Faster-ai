import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { Box, Flex, Text } from "@chakra-ui/react";

const WelcomeUser = () => {
  const username = JSON.parse(sessionStorage.getItem("user_name"));
  return (
    <Flex gap="12px" my={{ base: "20px", md: "40px" }}>
      <Flex
        direction={"column"}
        m="auto"
        w="50%"
        bg="#FAFAFA"
        borderRadius={"12px"}
        py="16px"
      >
        <Text color="#515151">{username}</Text>
        <Text>Let's explore this evening</Text>
      </Flex>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        w="50%"
        gap="8px"
      >
        <Flex direction={"column"} alignItems={"center"} color="#D39171">
          <Box p="12px" bg="#FF6D6A" borderRadius={"12px"}>
            <BiSolidOffer fontSize={"24px"} color="white" />
          </Box>
          <Text color="#838BA1">Offers</Text>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} color="#D39171">
          <Box p="12px" bg="#7CC8EE" borderRadius={"12px"}>
            <GiWallet fontSize={"24px"} color="white" />
          </Box>
          <Text color="#838BA1">Wallet</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WelcomeUser;
