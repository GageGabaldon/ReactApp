import './App.css';
import {Routes, Route} from 'react-router-dom';
import {
  Home,
  Error,
  About,
  Projects,
  Resume,
  Contact

} from './Pages/pages';

function App() {
  return (
    <div className="App text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
