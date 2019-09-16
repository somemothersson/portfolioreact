import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import './App.css';
import items from "../src/items.json";
import Grid from "./Components/Grid"

class App extends Component {


  state = {
    items
  }
render(){
  return (
    <>
     <Header></Header>
     <div className='container'>
         
           <Grid
             //onclick method that originates from binding of props to the item Id in ItemImage
            
             //This is how we allow state to traverse into other components with props
             items={this.state.items}
           />
         </div>
    </>
   );
 }
 
}

  
export default App;
