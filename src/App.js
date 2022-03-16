import './App.css';
import {Routes, Route} from 'react-router-dom';
import {
  Home,
  Error
} from './Pages/pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route/>
        <Route/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
