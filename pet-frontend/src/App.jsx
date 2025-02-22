import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddPet from './components/AddPet';
import PetList from './components/PetList';
import './styles/App.css';
import backgroundImage from './assets/petbg.jpeg'; // Import the image

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/pets" element={<PetList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;