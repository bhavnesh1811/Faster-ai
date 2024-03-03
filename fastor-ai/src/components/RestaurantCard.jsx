import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const RestaurantCard = (restaurant) => {
  const navigate = useNavigate();
  return (
    <Flex
      gap="12px"
      cursor={"pointer"}
      onClick={() => {localStorage.setItem("restaurant",JSON.stringify(restaurant));navigate(`/singleRestaurant/${restaurant.restaurant_id}`)}}
    >
      <Box w={{ base: "45%", xl: "50%" }}>
        <Image
        h="100%"
          alt={restaurant?.images[0].url}
          borderRadius={"12px"}
          src={restaurant?.images[0].url}
        />
      </Box>
      <Flex
        textAlign={"left"}
        direction={"column"}
        w={{ base: "55%", xl: "50%" }}
        fontSize={{ base: "12px", sm: "16px" }}
      >
        <Text>{restaurant?.restaurant_name}</Text>
        <Text>Cakes,Pastry,Pastas</Text>
        <Text color="#838BA1">
          {restaurant?.location?.location_locality},{" "}
          {restaurant?.location?.city_name}
        </Text>
        <Flex color="#D39171" gap="4px" alignItems={"center"}>
          <BiSolidOffer />
          <Text>4 Offers Trending</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Flex direction={"column"}>
            <Flex gap="4px" alignItems={"center"} fontWeight={"bold"}>
              <FaStar />
              <Text>{restaurant?.rating?.restaurant_avg_rating}</Text>
            </Flex>
            <Text color="#838BA1">Popularity</Text>
          </Flex>
          <Flex direction={"column"}>
            <Flex gap="4px" alignItems={"center"} fontWeight={"bold"}>
              <Text>{restaurant?.currency?.symbol}</Text>
              <Text>{restaurant?.avg_cost_for_two}</Text>
            </Flex>
            <Text color="#838BA1">Cost For Two</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RestaurantCard;
