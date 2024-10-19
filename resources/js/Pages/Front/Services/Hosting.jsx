import Header from "../Partial/Header"
import FrontLayout from "@/Layouts/FrontLayout"
import Footer from "../Partial/Footer"
import HostingPrice from "./HostinPrice"
export default function Hosting() {
  return (
    <>   
        <Header />
          <FrontLayout>
                <HostingPrice />
          </FrontLayout>
        <Footer />
    </>
  )
}