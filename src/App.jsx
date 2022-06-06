import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeersPage from './pages/BeersPage';
import HomePage from './pages/HomePage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import SingleBeerPage from './pages/SingleBeerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beer/:id" element={<SingleBeerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
