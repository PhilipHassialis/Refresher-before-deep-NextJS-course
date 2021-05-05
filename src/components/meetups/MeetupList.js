import classes from "./MeetupList.module.css";
import React from "react";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem key={meetup.id} {...meetup} />
            ))}
        </ul>
    );
};

export default MeetupList;
