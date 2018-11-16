import React from 'react'
import NavBar from './NavBar.js'
const List = [
    {
        menu:"Home",
        NavBar:false
    },
    {
        menu:"Contact",
        NavBar:false
    },
    {
        menu:"Services",
        NavBar:true
    }
]

const Mnav= props  =>
<div className='dropdown'>
        <ul  >
            <li >
                <a className="nav-menu" href="#">
                    {props.itemmenu.menu}
                    {props.itemmenu.NavBar && <NavBar/>}
                </a>
            </li>
        </ul>
        
  </div>      
const NavDropDown = props =>
   <div >
       {List.map((el, i)=>(
        <Mnav itemmenu = {el}/>
       ))}
   </div>

export default NavDropDown