
import Header from './Partial/Header';
import Footer from './Partial/Footer';
import ServicesFeature from './Services/ServicesFeature';
import HostingPrice from './Services/Hosting/HostinPrice';
import HeroPart from './Partial/HeroPart';
import CeoPrice from './Services/Ceo/CeoPrice';
import Statistics from './Statistics';

export default function Home() {    
  return ( 
    <>
      <Header />
      <HeroPart />
      <ServicesFeature />
      <HostingPrice />
      <CeoPrice />
      <Statistics />
      <Footer/>
    </>
  )
}