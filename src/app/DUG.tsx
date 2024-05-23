"use client"

import React from "react";
import Image from 'next/image'
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import dug from "../photos/dug.jpg";
import clover from "../photos/clover.jpeg";
import heatmap from "../photos/heatmap.png";


const exampleItems = [
  {
    pic: dug,
    description: "Autonomous field surveys",
  },
  {
    pic: clover,
    description: "Species detection",
  },
   {
    pic: heatmap,
    description: "Coverage heatmap for every site",
  },
];

const Farmng = () => {
  return (
    <Box marginLeft={1} marginRight={1}>
      <Typography 
        variant="h4" 
        color={"#004f31"} 
        align={"center"} 
        marginTop={6}
        fontWeight={"regular"}
      >
        Discover Underground
      </Typography>
      {/* <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"50%"} marginLeft={"25%"}>
        <Image src={team} alt={"team"} height={500}/>
      </Box> */}
      <Typography 
        variant="h6" 
        color={"#004f31"} 
        align={"center"} 
        fontWeight={"regular"}
        marginTop={2}
      >
        DUG - our scouting robot can map different species. 
      </Typography>
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
        // mt: 2,
      }}
    >
      {exampleItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
    <a href="mailto:kristof@listt.io">
    <Typography 
        variant="subtitle1" 
        color={"#fcf7f1"} 
        align={"center"} 
        fontWeight={"bold"}
        marginTop={2}
        bgcolor={"#d69f32"}
        padding={3}
        borderRadius={3}
        width={"300px"}
      >
        
        CAN WE MAP YOUR FIELD?
        
      </Typography>
      </a>
      </Box>
    </Box>
  );
};

function Item(props: any) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "#fcf7f1",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "30px",
        p: 4,
        m: 1
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

export default Farmng;
