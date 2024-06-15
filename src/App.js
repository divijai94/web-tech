import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
import Home from "./component/Home"
import About from "./component/About"
import Contact from  "./component/Contact"
import Course from "./component/Course"

function App() {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/course" element={<Course />}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
