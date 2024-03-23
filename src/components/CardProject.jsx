import React, { useRef } from "react";

const CardProject = ({ project }) => {

    const cardRef = useRef();

    return (
        <div className="card" ref={cardRef}>
            <div className="card-image">
                <img src={project.url_picture} alt="project" />
            </div>
            <div className="card-content">
                <h3>{project.name}  <span>({project.front} & {project.back})</span></h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default CardProject;
