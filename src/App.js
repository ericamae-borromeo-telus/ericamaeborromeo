import './App.css';


//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import SaturdayComp from './components/SaturdayComp'
import SundayComp from './components/SundayComp'
import HomeComp from './components/HomeComp'

//Pages
import HomeContent from './pages/HomeContent'
import SaturdayContent from './pages/SaturdayContent'
import SundayContent from './pages/SundayContent'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route path="home_content" element={<HomeContent/>} />
            <Route path="saturday_content" element={<SaturdayContent />}/>
            <Route path="sunday_content" element={<SundayContent/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    <Footer/>
    </>
  );
}

export default App;
