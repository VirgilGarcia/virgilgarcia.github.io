import React from "react";
import CardProject from "../components/CardProject";
import { projectData } from '../data/projectData';

const Project = () => {

    return (
        <div className="projectContainer">
            {projectData.map((project) => (
                <CardProject key={project.id} project={project} />
            ))}

        </div>
    );
}

export default Project;