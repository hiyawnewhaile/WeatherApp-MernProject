import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CurrentLocation from './components/CurrentLocation';
import ByCity from './components/ByCity';

function App() {
  const myStyle = {
    backgroundImage: `URL("https://upload.wikimedia.org/wikipedia/commons/e/e9/Sun_and_Clouds.JPG")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', 
    
}
  return (
    <div className="App" style={myStyle}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/weather/currentlocation" element={<CurrentLocation/>}/>
        <Route path="/weather/bycity/:city" element={<ByCity/>}/>
      </Routes>
    </div>
  );
}

export default App;
