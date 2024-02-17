import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    return (
        <div id="header" className={styles.header}>
            <p id="projectName" className={styles.projectName}>{props.projectName}</p>
            <img id="image" className={styles.image} alt={props.projectName} src={`/res/${props.projectImg}`}></img>
        </div>
    );
};

export default ProjectCard;
