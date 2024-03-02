import { Box, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import RestaurantCard from "../components/RestaurantCard";

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
    <Heading m={"20px auto"}>Popular Ones</Heading>
      <Grid
        my={{ base: "20px", md: "40px" }}
        mx={{ base: "8px", md: "16px" }}
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
    </>
  );
};

export default Home;
