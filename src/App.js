
import './App.css';
import Navbar from './Components.js/Navbar';
import Home from './Components.js/Home';

function App() {



  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="content">
       <Home></Home>
     </div>
    </div>
  );
}

export default App;
