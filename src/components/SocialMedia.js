import React from 'react';
import {TiSocialLinkedin,TiSocialInstagram,TiSocialGithub,TiSocialGooglePlus} from "react-icons/ti"
import {FaGithub,FaLinkedinIn,FaGooglePlus,FaInstagram} from "react-icons/fa"

const SocialMedia = () => {
    return ( 
        <div>
            <ul className="pt-2">
            <a className="btn-link pr-2" href="#"><FaLinkedinIn size="40px" color="blue"/></a>
            <a className="btn-link pr-2" href="#"><FaInstagram size="40px" color="#D6023A"/></a>
            <a className="btn-link pr-2" href="#"><FaGithub size="40px" /></a>
            <a className="btn-link" href="#"><FaGooglePlus size="40px" color="red"/></a>

            </ul>
        </div>
     );
}
 
export default SocialMedia;