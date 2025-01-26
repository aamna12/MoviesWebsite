import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Movies from './components/Movies';
import pic from "./images/thumb-1920-445155.jpg";

function App() {
  return (
    <>
    <Router>
    <div className="relative h-screen w-screen">
        <img
          src={pic}
          alt="Background"
          className="fixed  inset-0 w-full h-full blur-sm object-cover -z-10"
        />
     <Navbar />
     <Routes>
     <Route exact path="/" element={<HomePage />}> </Route>
     <Route exact path="/movies" element={<Movies />}> </Route>
     </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
