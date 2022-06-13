
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
