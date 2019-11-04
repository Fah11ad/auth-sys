import React from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import News from './components/News';
import CustomTables from './components/CustomTables'
import Competions from './components/Competions'
import CustomNavbar from './components/CustomNavbar'
import Football from './components/Football'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/CustomTables" component= {CustomTables}/>
      <Route path="/Competions" component= {Competions}/>
      <Route path="/football" component= {Football}/>
      
      </Switch>   
    </div>
    </BrowserRouter>
  );
}

export default App;
