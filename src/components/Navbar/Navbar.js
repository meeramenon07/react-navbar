import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import {Button} from "../Button";
import "./Navbar.css";

Class Navbar extends Component{
  
  state = { clicked : false};
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked});
    
  render(){
    return(
      <nav className="NavItems">
      <h1 className="NavbarLogo">T-Shirt Seller<i className="fas fa-tshirt"></i></h1>
      <div className="menu-icon" onClick={this.handleClick}>
       <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      
      </div>
      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
      {MenuItems.map((item, index) => {
       return(
         <li key={index}>
          <a className = {item.cName} href={url}>
          {item.title}
          </a>
         
         </li>
       
       )
    
    })}
      </ul>
      <Button>Sign Up</Button>
      </nav>
    )
  }
   
  }
  
export default Navbar;

}

