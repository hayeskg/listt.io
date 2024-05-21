"use client"

import React from "react";
import Image from 'next/image'
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import sheep from "../photos/sheep.jpg"
import enclosure from "../photos/enclosure.jpg"
import group from "../photos/group.jpg"


const exampleItems = [
  {
    pic: sheep,
    description: "Happy residents",
  },
  {
    pic: enclosure,
    description: "Mobile enclosure",
  },
   {
    pic: group,
    description: "Lunchtime",
  },
];

const ExCarousel = () => {
  return (
    <Carousel
      animation="slide"
      indicators={true}
    //   timeout={500}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={false}
      sx={{
        maxWidth: "600px",
        flexGrow: 1,
        margin: "auto",
        mt: 5,
      }}
    >
      {exampleItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props: any) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.100",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        p: 4,
      }}
      elevation={4}
    >
    <Image
      src={props.item.pic}
      alt="sheep"
      width={500} 
      height={500} 
      blurDataURL="data:..." 
      placeholder="blur"
    />
    <Typography marginTop={2} color={"#d69f32"}>{props.item.description}</Typography>
    </Paper>
  );
}

export default ExCarousel;
