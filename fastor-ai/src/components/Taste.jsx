import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Taste = ({ carousalData }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 924 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 924, min: 426 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Box my={{ base: "20px", md: "40px" }}>
      <Flex justifyContent={"space-between"}>
        <Heading size={isMobile ? "md" : "lg"}>Your Taste</Heading>
        <Flex
          gap="4px"
          alignItems={"center"}
          cursor={"pointer"}
          _hover={{ cursor: "pointer" }}
        >
          <Text>see all</Text>
          <IoIosArrowDroprightCircle color="lightgray" />
        </Flex>
      </Flex>

      <Box my="16px">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          partialVisible={true}
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={1000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {carousalData &&
            carousalData?.map((restaurant, index) => {
              return (
                <Flex
                  key={index}
                  borderRadius="12px"
                  p={1}
                  boxShadow="rgba(0, 0, 0, 0.15)0px 5px 15px"
                  flexDirection={"column"}
                  marginInline={["6px", "6px", "10px", "14px"]}
                  my="8px"
                >
                  <Box>
                    <Image
                      minH="85px"
                      alt={restaurant?.images[0].url}
                      borderRadius={"12px"}
                      src={restaurant?.images[0].url}
                    />
                  </Box>

                  <Flex
                    textAlign={"left"}
                    direction={"column"}
                    fontSize={"12px"}
                    h={{ base: "80px", md: "60px" }}
                    overflow={"hidden"}
                  >
                    <Text>{restaurant?.restaurant_name}</Text>
                    <Text color="#838BA1">
                      {restaurant?.location?.location_locality},{" "}
                      {restaurant?.location?.city_name}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Taste;
