
import Header from './Partial/Header';
import Footer from './Partial/Footer';
import ServicesFeature from './Services/servicesFeature';
import HostingPrice from './Services/HostinPrice';
import HeroPart from './Partial/HeroPart';
import CeoPrice from './Services/CeoPrice';

export default function Home() {    
  return ( 
    <>
      <Header />
      <HeroPart />
      <ServicesFeature />
      <HostingPrice />
      <CeoPrice />
      <Footer/>
    </>
  )
}