import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hero from './pages/Hero/Hero'
import Navbar from './utility/Navbar/Navbar'
function App() {
  return (
    <Router>
    <div className="App">
      <Route to="/" component={Navbar}/>
      <Route to="/" component={Hero}/>
    </div>
    </Router>
  );
}

export default App;
