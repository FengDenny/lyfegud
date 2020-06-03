import React, { Component } from 'react'
import '../../css/Navbar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faHeartbeat);

 class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar"> 
                <div className="logo-link">
                   <Link to="/"><h1 className="heading-primary active"> Lyfegud <FontAwesomeIcon icon={faHeartbeat}/></h1></Link>
                </div>   
                 <nav>
                 <div className="nav-links ">
                   <ul>
                       <div className="nav-header-links">
                         <Link to="/about">About</Link>
                        <Link to="/vlogs">Vlogs</Link>
                       </div>
                        <div className ="nav-button">
                             <Link to="/signup"> <button>Sign up, For Free </button></Link> 
                        </div>
                          </ul>           
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
