import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi, FaBatteryFull } from "react-icons/fa6";

const NavBar = ({ color }) => {
  const getFormattedTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
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
    <Flex
      p={"20px"}
      justifyContent={"space-between"}
      position={"relative"}
      zIndex={1}
    >
      <Box>
        <Text color={color ? "white" : "black"}>{currentISTTime}</Text>
      </Box>
      <Flex gap="8px" color={color ? "white" : "black"}>
        <GiNetworkBars />
        <FaWifi />
        <FaBatteryFull />
      </Flex>
    </Flex>
  );
};

export default NavBar;
