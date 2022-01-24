import { Route, Routes } from 'react-router-dom';
import Information from './components/Information';
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Information />} />
    </Routes>
  );
};

export default App;