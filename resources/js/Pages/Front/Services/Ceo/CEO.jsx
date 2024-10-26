import FrontLayout from '@/Layouts/FrontLayout';
import CeoPrice from './CeoPrice';
import Header from '../../Partial/Header';
import Footer from '../../Partial/Footer';

export default function CEO() {
  return (
    <>
     <Header />
      <FrontLayout>
        <CeoPrice />
      </FrontLayout>
      <Footer />
    </>

  )
}
