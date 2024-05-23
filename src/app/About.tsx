import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import team from "../photos/team_image.jpeg";
import partnership from "../photos/partnership.png";

export default function Header() {
  return (
    <Box display="flex" flexDirection={"column"} justifyContent={"center"} paddingTop={3} paddingBottom={6}>
            <Typography 
                variant="h4" 
                color={"#004f31"} 
                align={"center"} 
                marginTop={2}
                fontWeight={"regular"}
            >
                About
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                marginTop={2}
                fontWeight={"bold"}
            >
              We're a team of engineers in: 
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                // marginTop={2}
                fontWeight={"regular"}
            >
              ⚬ robotics
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                // marginTop={2}
                fontWeight={"regular"}
            >
              ⚬ automation
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                // marginTop={2}
                fontWeight={"regular"}
            >
              ⚬ computer vision
            </Typography>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"50%"} marginLeft={"25%"}>
              <Image src={team} alt={"team"} height={500}/>
            </Box>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"bold"}
            >
              Our systems are: 
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ built for your farming business
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ the right level of complex
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ robust and future-proof
            </Typography>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"50%"} marginLeft={"25%"}>
              <Image src={partnership} alt={"team"} height={500}/>
            </Box>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"bold"}
            >
              We are passionate about: 
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ collaborative innovation
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ resilient food systems
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ access to technology
            </Typography>
    </Box>
  );
}