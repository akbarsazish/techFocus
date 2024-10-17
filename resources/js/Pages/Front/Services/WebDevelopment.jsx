import Header from "../Partial/Header"
import FrontLayout from "@/Layouts/FrontLayout"
import Footer from "../Partial/Footer"
export default function WebDevelopment() {
  return (
    <>   
        <Header />
          <FrontLayout>
             <p className="text-3xl text-white">
                Web Development
             </p>
          </FrontLayout>
        <Footer />
    </>
  )
}