import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Image } from "@chakra-ui/react";
import styles from "../styles/HomeCarousal.css";

const settings = {
  showThumbs: false,
  fade: true,
  infiniteLoop: true,
  autoPlay: true,
};
const HomeCarousal = () => {
  return (
    <Box position={"relative"} zIndex={0}>
      <Carousel {...settings} style={{ styles }} className="carousal">
        <Box>
          <Image
            maxH={{ base: "150px", md: "450px" }}
            src="https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjBhcHAlMjBjYXJvdXNhbHN8ZW58MHx8MHx8fDA%3D"
            alt="Broken image 1"
          />
        </Box>
        <Box>
          <Image
            maxH={{ base: "150px", md: "450px" }}
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBhcHAlMjBjYXJvdXNhbHN8ZW58MHx8MHx8fDA%3D"
            alt="Broken image 2"
          />
        </Box>
        <Box>
          <Image
            maxH={{ base: "150px", md: "450px" }}
            src="https://images.unsplash.com/photo-1508848484850-f696c839aabd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjB3aXRoJTIwdGV4dHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Broken image 3"
          />
        </Box>
        <Box>
          <Image
            maxH={{ base: "150px", md: "450px" }}
            src="https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_106176-1452.jpg"
            alt="Broken image 4"
          />
        </Box>
        <Box>
          <Image
            maxH={{ base: "150px", md: "450px" }}
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=80"
            alt="Broken image 5"
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default HomeCarousal;
