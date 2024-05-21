
import Enclosure from './Enclosure';
import Header from './Header';
import Footer from './Footer';
import About from './About';

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Enclosure/>
      <Footer/>
    </div>
  );
}
