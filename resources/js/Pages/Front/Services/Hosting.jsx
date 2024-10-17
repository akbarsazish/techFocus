import Header from "../Partial/Header"
import FrontLayout from "@/Layouts/FrontLayout"
import Footer from "../Partial/Footer"
export default function Hosting() {
  return (
    <>   
        <Header />
          <FrontLayout>
             <p className="text-3xl text-white">
                Hosting
             </p>
          </FrontLayout>
        <Footer />
    </>
  )
}