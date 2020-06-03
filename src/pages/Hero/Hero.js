import React, { Component } from 'react'
import lgCover from '../../images/video-cover/LGCover.mp4'
import{Link} from 'react-router-dom'
import '../../css/Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faHeartbeat);

 class Hero extends Component {
    render() {
        return (
            <>
            <section id="hero">
                <div className="video-cover">
                    <video autoplay ="autoPlay" loop="loop" muted src={lgCover}>
                    Your browser does not support this video. 
                   </video>  
                </div>
                <div className="hero-section">
                    <h1>Experiences the lifestyle of others</h1>
                    <div className="btn-primary">
                   <Link to="/signup"><button>Sign up, for free</button></Link> 
                </div>
                <div className="btn-secondary">
                <Link to="/signin"><button>Sign in</button></Link>
                </div>
                </div>
                <footer className ="footer">
                     <div className="footer-logo">
                          <h1><FontAwesomeIcon icon={faHeartbeat}/></h1> 
                     </div>
                    <p> Copyright © 2020 - Lyfegud: All Rights Reserved.</p>
                 </footer>  
                 </section>
                 
                 </>  
          
        )
    }
}
export default Hero


