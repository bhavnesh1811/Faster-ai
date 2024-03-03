import React from "react";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { TbUserPin } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const OrderLocation = () => {
  const token = sessionStorage.getItem("token");
  const toast = useToast();
  const nav = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    toast({
      title: `Logout Successful`,
      status: "success",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
    nav("/");
  };
  return (
    <Flex
      direction={"column"}
      boxShadow={
        "rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      }
      py={{ base: "12px", md: "24px" }}
      px={{ base: "8px", md: "16px" }}
    >
      <Flex justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Flex gap="4px" alignItems={"center"}>
            <Text color="#515151">Pre Order From</Text>
            <TbUserPin />
          </Flex>
          <Box textAlign={"left"}>
            <Text>Connaught Place</Text>
          </Box>
        </Flex>

        {token && (
          <Flex cursor={"pointer"} _hover={{ cursor: "pointer" }}>
            <Button
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default OrderLocation;
