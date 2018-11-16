import React from 'react'



    const List = [
    {
        menu: "check-in check-out"
    },
    {
        menu: "Parking"
    },
    {
        menu: "Food & snaks" 
    },
    {
        menu: "fitness" 
    },
    {
        menu: "family & Pets" 
    }
]
const Navb = (props) =>
<div > 
    
        <ul >
            <li className="drpdownitem">
                <a className="nav-menu" href="#">
                    {props.item.menu}
                </a>
            </li>
        </ul>

</div>
const NavBar = props =>
   <div className='dropdown-content'>
       {List.map((el, i)=>(
        <Navb item ={el}/>
       ))}
   </div>
  

export default NavBar