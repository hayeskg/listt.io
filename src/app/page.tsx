
import Enclosure from './Enclosure';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Farmng from './Farmng';
import DUG from './DUG';

import { Divider } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Divider/>
      <Enclosure/>
      <Divider/>
      <Farmng/>
      <Divider/>
      <DUG/>
      <Footer/>
    </div>
  );
}
