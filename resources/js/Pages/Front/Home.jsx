
import Header from './Partial/Header';
import Footer from './Partial/Footer';
import ServicesFeature from './Services/servicesFeature';
import HostingPrice from './Services/HostinPrice';

export default function Home() {    
  return ( 
    <>
      <Header />
      <ServicesFeature />
      <HostingPrice />
      <Footer/>
    </>
  )
}