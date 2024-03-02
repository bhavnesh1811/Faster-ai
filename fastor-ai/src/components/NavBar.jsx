import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi,FaBatteryFull } from "react-icons/fa6";

const NavBar = () => {
  const getFormattedTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  };
  const [currentISTTime, setCurrentISTTime] = useState(getFormattedTime());

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrentISTTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(id);
  }, [currentISTTime]);

  return (
    <Flex p={"20px"} justifyContent={"space-between"}>
      <Box>
        <Text>{currentISTTime}</Text>
      </Box>
      <Flex gap="8px">
        <GiNetworkBars />
        <FaWifi />
        <FaBatteryFull />
      </Flex>
    </Flex>
  );
};

export default NavBar;
