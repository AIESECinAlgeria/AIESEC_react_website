import Footer from '../Components/Footer';
import Exprience from '../Components/experience';

import Home from '../Components/home'
import AboutUs from '../Components/AboutUs'
import OurPartners from '../Components/OurPartners';
import GlobalTalent from '../Components/Global talent';






function Homepage() {
  return (
    <div className="cocontainer-fluid">
      <Home/>
      <OurPartners/>
      <GlobalTalent/>
     <AboutUs/>
     <Exprience/>
      <Footer/>
    </div>
  );
}

export default Homepage;
