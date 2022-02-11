import {Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/Navbar/Navbar";
import CountryPage from './pages/CountryItem/CountryPage';
import { Home } from './pages/Home/Home';



function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>}  />
          <Route path='/country/:iso' element={<CountryPage/>} />
        </Routes>
    </>
    
  );
}

export default App;
