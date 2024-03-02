import React from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { CiStar } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const SingleRestaurant = () => {
  const restaurant = JSON.parse(localStorage.getItem("restaurant"));
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Box
        backgroundImage={`url(${restaurant?.images[0].url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="300px"
        width="100%"
        top={-65}
        position={"relative"}
        // zIndex={1001}
      >
        <Box
          position={"absolute"}
          zIndex={2}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <IoIosArrowBack
            style={{
              color: "red",
              margin: "64px 16px",
              fontSize: isMobile ? "40px" : "48px",
            }}
          />
        </Box>
      </Box>

      <Box
        w={{ base: "90%", md: "80%", lg: "70%" }}
        m="-70px auto"
        boxShadow={"rgba(0,0,0,0.5)0px 5px 15px"}
        borderRadius={"12px"}
        p={{ base: "8px 16px", md: "16px" }}
      >
        {/* <Box>
        <Image
          alt={restaurant?.images[0].url}
          borderRadius={"12px"}
          src={restaurant?.images[0].url}
        />
      </Box> */}
        <Flex
          fontSize={{ base: "12px", sm: "16px" }}
          direction={"column"}
          justifyContent={"center"}
          my="20px"
        >
          <Flex justifyContent={"space-between"}>
            <Flex textAlign={"left"} direction={"column"}>
              <Text color="#1E232C">{restaurant?.restaurant_name}</Text>
              <Text color="#505259">
                {restaurant?.location?.location_locality},{" "}
                {restaurant?.location?.city_name}
              </Text>
            </Flex>
            <Flex gap="4px" alignItems={"center"} color="#595959">
              <CiStar />
              <Text>{restaurant?.rating?.restaurant_avg_rating}</Text>
            </Flex>
          </Flex>
          <Flex color="#D39171" gap="4px" alignItems={"center"}>
            <BiSolidOffer />
            <Text>4 Offers Trending</Text>
          </Flex>
        </Flex>
        <Box textAlign={"left"}>
          <Text color={"#515151"}>
            Our delicate vanilla cake swirled with chocolate and filled with
            mocha chocolate chip cream and a layer of dark chocolate ganache
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default SingleRestaurant;
