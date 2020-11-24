import React,{Component} from "react";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/TodoApp";
import {BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export class App extends Component{
  render(){
    return <>
      
      <Router>
      <Header/>
        <Route path="/" exact component={TodoApp}/>
        <Route path="/about" component={About}/>
      </Router>
    </>;
  }
}
export default App;