import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import UserAdd from './components/UserAdd/index.jsx';
import itemDetails from './components/itemDetails'
import Footer from './components/Footer'
import Category from './components/Category/index.jsx';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={UserAdd} />
        <Route exact path="/item/:id" component={itemDetails} />
        <Route exact path="/Category/:id" component={Category} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

const Error = ()=>{
  return(
    <div style={{display: 'flex',justifyContent:'center',alignItems:'center',padding:'90px'}}>
      <h1>404 Error <br /> Page not found</h1>
    </div>
  )
}

export default App;
