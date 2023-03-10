import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import ContactMe from './Components/ContactMe/ContactMe';
import MyProjects from './Components/MyProjects';
import MySkills from './Components/MySkills';
import HomePage from './HomePage/HomePage';
import Overview from './Overview/Overview';

function App() {
  return (
    <>
      <main>
        <Header />
       
        {/* <AboutMe/> */}
        <Routes>
          <Route
            path='/contact'
            element={<ContactMe />}
          />
          <Route
            path='/skills'
            element={<MySkills />}
          />
          <Route
            path='/projects'
            element={<MyProjects />}
          />
          <Route
            path='/'
            element={ <HomePage />}
          />
          <Route
            path='/about'
            element={ <AboutMe />}
          />
          <Route
            path='/overview'
            element={ <Overview />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
