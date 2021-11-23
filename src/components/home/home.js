import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './home.css';
import Body from './components/body/body';
import CareerSection from './components/carrerSection/carrerSection';
import ChooseSection from './components/chooseUsSection/chooseUsSection';
import Header from './components/header/header';
import ProgramSection from './components/programSection/programSection';
import LandingPage from "./components/landingpage/LandingPage"
import Footer from "./components/footer/Footer"

function Home() {
   const [dropdown, setdropdown] = useState(false);
   return (
      <div className="app">
         <Header dropdown={dropdown} setdropdown={setdropdown} />
         <Body />
         <ProgramSection />
         <div className="image heading"><h3>career Guidance</h3></div>
         <CareerSection />
         <div className="image heading"><h3>Benefits</h3></div>
         <ChooseSection />
         <LandingPage />
         <Footer />
      </div>
   );
}

export default Home;
