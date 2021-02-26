import React from 'react';
import {TiSocialLinkedin,TiSocialInstagram,TiSocialGithub,TiSocialGooglePlus} from "react-icons/ti"
import {FaGithub,FaLinkedinIn,FaGooglePlus,FaInstagram, FaBlogger} from "react-icons/fa"

const SocialMedia = () => {
    return ( 
        <div>
            <ul className="pt-2">
            <a className="btn-link pr-2" href="https://www.linkedin.com/in/prajwal-patil-609a19146/"><FaLinkedinIn size="40px" color="blue"/></a>
            {/* <a className="btn-link pr-2" href="#"><FaInstagram size="40px" color="#D6023A"/></a> */}
            <a className="btn-link pr-2" href="https://github.com/prajwal-scorpionking123"><FaGithub size="40px" /></a>
            <a className="btn-link" href="https://esysol.blogspot.com/"><FaBlogger size="40px" color="red"/></a>
            
            </ul>
        </div>
     );
}
 
export default SocialMedia;