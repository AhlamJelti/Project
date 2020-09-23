import React, { Component } from 'react';
import './App.css';
import Recettes from './Component/Recette/Recettes' ;
import AddRecette from './Component/Recette/AddRecette' ;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

 class App extends Component {
  render() {
    return (
      <Router>
      <div className="Appl">
      <Switch>
          
          <Route exact path="/" component={Recettes} />
          <Route exact path="/Recette/add" component={AddRecette} />
      </Switch>
      </div>
      </Router>
     
    )
  }
}



export default App;
