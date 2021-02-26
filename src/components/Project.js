import React from 'react';
import ProjectPic  from "../resources/img/6.jpg"
const Project = ({title,text,linkTo}) => {
    return ( 
        <div className="col-sm-4">
        <div className="card">
        <img src={ProjectPic} class="card-img-top" height="20%" width="20%" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {text}
            </p>
            <a href={linkTo} target="_blank" className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
     );
}
 
export default Project
;