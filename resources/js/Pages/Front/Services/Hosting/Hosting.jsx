import Header from "../../Partial/Header"
import Footer from "../../Partial/Footer"
import HostingPrice from "./HostinPrice"
import HostingFeatures from "./HostingFeatures"
export default function Hosting() {
  return (
    <>   
        <Header />
          <HostingFeatures />
          <HostingPrice />
        <Footer />
    </>
  )
}