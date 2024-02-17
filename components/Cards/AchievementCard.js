import { Fragment } from 'react';
import React from "react";
import classes from "./AchievementCard.module.css";

const AchievementCard = (props) => {
    return (
        <Fragment>
            <div id="fragment" className={classes.Fragment}>
                <div id="header" className={classes.header}>
                    <div id="list" className={classes.list}>
                        <p id="name" className={classes.name}>{props.achievementName}</p>
                        <img id="image" className={classes.image} alt={props.achievementName} src={`res/${props.achievementImg}`}></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AchievementCard;
