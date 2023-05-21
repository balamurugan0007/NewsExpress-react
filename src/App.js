import React, { Component } from 'react';

//router pakages
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
 
// router pages
import Main from './components/Main';
import News from './components/pages/News';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         

          <Routes>
            <Route  path='/' element={<Main/>}    />
            <Route path='/News' element={<News/>}  />
            <Route path='/contact' element={<Contact/>}   />
            <Route path='/about' element={<About/>}   />

          </Routes>
       
      </div>
      </Router>
    );
  }
}

export default App;
