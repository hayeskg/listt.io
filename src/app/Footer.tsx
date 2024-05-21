import { Box, Divider, Typography } from "@mui/material";
import Image from 'next/image';
import linkedin from "../photos/linkedin.png";
import github from "../photos/github.png";
import mail from "../photos/mail.png";

export default function Footer() {
  return (
    <Box display="flex" paddingBottom={6} marginTop={6} flexDirection={"column"} bgcolor={"#3c7434"}>
        <Divider/>
        <Box display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-around"} width={"50%"} marginLeft={"25%"} marginTop={6}>
            <a href="https://www.linkedin.com/company/listt-io/">
              <Image src={linkedin} alt="linkedin" height={50}/>
            </a>
            <a href="https://github.com/listt-io-regenagtech">
              <Image src={github} alt="github" height={50}/>
            </a>
            <a href="mailto:kristof@listt.io">
              <Image src={mail} alt="mail" height={40}/>
            </a>
            
            
         </Box>
         <Box display="flex" flexDirection={"row"} justifyContent={"center"} marginTop={3}>
             <Typography 
                color={"#004f31"} 
                fontWeight={"light"}
                
            >
                © 2024 - listt.io
            </Typography>
        </Box>
        
    </Box>
  );
}