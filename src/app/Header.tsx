import { Box, Typography } from "@mui/material";
import Image from 'next/image'
import logo from "../photos/listt_szines_horizontalis.png"

export default function Header() {
  return (
    <Box display="flex" justifyContent={"center"} paddingTop={3} paddingBottom={3} bgcolor={"#3c7434"}>
        <Box display="flex" flexDirection={"column"} alignItems={"center"}>
            {/* <Typography variant="h2" color={"black"} align={"center"}>Welcome to listt.io</Typography> */}
            <Image src={logo} alt="logo" height={100}/>
            <Typography 
                variant="h6" 
                color={"#004f31"} 
                align={"center"} 
                marginTop={2}
                fontWeight={"bold"}
            >
                Appropriate technology solutions for nature friendly farming.
            </Typography>
         </Box>
    </Box>
  );
}