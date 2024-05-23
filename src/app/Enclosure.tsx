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

const Enclosure = () => {
  return (
    <Box marginBottom={6}>
      <Typography 
        variant="h4" 
        color={"#004f31"} 
        align={"center"} 
        marginTop={4}
        fontWeight={"regular"}
      >
        Mobile Enclosure
      </Typography>
      {/* <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"50%"} marginLeft={"25%"}>
        <Image src={team} alt={"team"} height={500}/>
      </Box> */}
      <Typography 
        variant="subtitle1" 
        color={"#004f31"} 
        align={"center"} 
        fontWeight={"regular"}
        marginTop={2}
      >
        Bringing livestock back into arable fields.
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
        PRE-ORDER TODAY!
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

export default Enclosure;
