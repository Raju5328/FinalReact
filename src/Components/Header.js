import React, { useState } from "react";
import '../../index.css';
import { Link } from "react-router-dom";
import onlineStatus from "../utils/onlineStatus";
 
const Header = () =>{

        const [login, setlogin] = useState("LogIn");
        const onlineStatusCheck = onlineStatus();

       

    return(
       <div className="header">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        <div className="navitems">
            <ul className="listheader">
                <li>Onlin Status = {onlineStatusCheck? <span>Online</span>: "Offline" }</li>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
                <li><Link to="/about"> About</Link></li>
                <button className="btnEln" onClick={()=>login==="LogIn"?setlogin("LogOut"):setlogin("LogIn")}
                    // console.log("clicked")
                    >{login}</button>
            </ul>
        </div>
       </div>


    )
}

export default Header;