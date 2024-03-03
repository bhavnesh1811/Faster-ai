import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import RestaurantCard from "../components/RestaurantCard";
import HomeCarousal from "../components/HomeCarousal";
import WelcomeUser from "../components/WelcomeUser";
import OrderLocation from "../components/OrderLocation";
import Taste from "../components/Taste";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const isMobile = useBreakpointValue({ base: true, md: false });
  

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
    <>
      
      <OrderLocation />
      <Box my={{ base: "20px", md: "40px" }} mx={{ base: "8px", md: "16px" }}>
        <WelcomeUser />
        <Taste carousalData={data} />
        <HomeCarousal />
        <Heading
          my={{ base: "20px", md: "40px" }}
          textAlign={{ base: "left", md: "center" }}
          size={isMobile ? "md" : "lg"}
        >
          Popular Ones
        </Heading>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap="16px"
        >
          {data &&
            data.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant} />
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
