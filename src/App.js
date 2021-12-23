
import './App.css';
import Navbar from './Components.js/Navbar';

function App() {

  const title = 'Welcome to the new blog'
  const likes = 50

  return (
    <div className="App">
      <Navbar></Navbar>
     <div className="content">
       <h1>{title}</h1>
       <p>liked {likes} times</p>
     </div>
    </div>
  );
}

export default App;
