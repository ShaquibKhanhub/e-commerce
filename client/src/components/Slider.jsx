import { sliderItems } from "../data";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Slider = () => {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    {sliderItems.map((item) => (
      <Box key={item.id} w="[50%]" h={"100vh"}>
        <Image src={item.img} h="[50%]" w={"full"} objectFit={"cover"} />
        <Heading bgColor={"blackAlpha.600"} color={"teal"} {...headingOptions}>
          Our Brandings
        </Heading>
      </Box>
    ))}
  </Carousel>
);

export default Slider;
