import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import team from "../photos/team_image.jpeg";

export default function Header() {
  return (
    <Box display="flex" flexDirection={"column"} justifyContent={"center"} paddingTop={3} paddingBottom={3}>
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
                fontWeight={"regular"}
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
                fontWeight={"regular"}
            >
              Our systems are: 
            </Typography>
            <Typography 
                variant="subtitle1" 
                color={"#004f31"} 
                align={"center"} 
                fontWeight={"regular"}
            >
              ⚬ good for your business
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
    </Box>
  );
}