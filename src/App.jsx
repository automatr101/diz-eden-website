import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimeNavBar } from './components/AnimeNavBar';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased bg-[#f9f9f9] text-[#1a1a1a]">
        <AnimeNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
