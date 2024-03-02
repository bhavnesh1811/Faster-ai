import { Box, Image, Flex, Text, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getRestaurants = async () => {
    setLoading(true);

    let res = await fetch(
      `https://staging.fastor.in/v1/m/restaurant?city_id=118`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(sessionStorage.getItem("token")),
        },
      }
    );
    if (res.status === 401) {
      console.error(
        "Unauthorized: You may need to handle this case differently."
      );
      // Handle unauthorized access, for example, redirect to login page
    } else if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    } else {
      res = await res.json();
      console.log(res);
      setData(res);
    }
    setLoading(false);
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  if (loading) {
    return <Box>Loading....</Box>;
  }
  return (
    <Grid
      my={{base:"20px",md:"40px"}}
      mx={{base:"8px",md:"16px"}}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        xl: "repeat(3,1fr)",
      }}
      gap="16px"
    >
      {data &&
        data.map((restaurant, index) => (
          <Flex key={index} gap="12px">
            <Box w={{ base: "45%", xl: "50%" }}>
              <Image
                alt={restaurant.images[0].url}
                borderRadius={"12px"}
                src={restaurant.images[0].url}
              />
            </Box>
            <Flex
              textAlign={"left"}
              direction={"column"}
              w={{ base: "55%", xl: "50%" }}
              fontSize={{ base: "12px",md:"16"}}
            >
              <Text>{restaurant?.restaurant_name}</Text>
              <Text>
                {restaurant?.location?.location_locality},{" "}
                {restaurant?.location?.city_name}
              </Text>
              <Flex color="#D39171" gap="4px" alignItems={"center"}>
                <BiSolidOffer />
                <Text>4 Offers Trending</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex direction={"column"}>
                  <Flex gap="4px" alignItems={"center"}>
                    <FaStar />
                    <Text>{restaurant?.rating?.restaurant_avg_rating}</Text>
                  </Flex>
                  <Text>Popularity</Text>
                </Flex>
                <Flex direction={"column"} gap="4px">
                  <Flex
                    gap="4px"
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text>{restaurant?.currency?.symbol}</Text>
                    <Text>{restaurant?.avg_cost_for_two}</Text>
                  </Flex>
                  <Text>Cost For Two</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
    </Grid>
  );
};

export default Home;
