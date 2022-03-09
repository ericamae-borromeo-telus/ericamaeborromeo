import './App.css';


//Router
import { BrowserRouter, Routes, Route , IndexRoute} from "react-router-dom";

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Aside from './components/Aside'

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
      <Aside/>

      <BrowserRouter>
        <Routes>
          <Route path="/ericamaeborromeo" element={<NavBar />} >
            <Route index element={<HomeContent/>} />
            <Route path="/ericamaeborromeo/home_content" element={<HomeContent/>} />
            <Route path="/ericamaeborromeo/saturday_content" element={<SaturdayContent />}/>
            <Route path="/ericamaeborromeo/sunday_content" element={<SundayContent/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    <Footer/>
    </>
  );
}

export default App;
