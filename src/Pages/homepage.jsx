import Footer from '../Components/Footer';
import Exprience from '../Components/experience';

import Home from '../Components/home'
import AboutUs from '../Components/AboutUs'
import OurPartners from '../Components/OurPartners';
import GlobalTalent from '../Components/Global talent';
import GlobalTeacher from '../Components/globalteacher';
import GlobalVolenteer from  '../Components/Global-volenteer'
import Navbar from'../Components/Navbar'






function Homepage() {
  return (
    <div className="cocontainer-fluid">
      <Navbar/>
      <Home/>
      <OurPartners/>
      <GlobalTalent/>
      <GlobalTeacher/>
      <GlobalVolenteer/>
     <AboutUs/>
     <Exprience/>
      <Footer/>
    </div>
  );
}

export default Homepage;
