import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: "m1",
        title: "First meetup",
        address: "Lelas Karagianni 42",
        description: "my first meetup description",
        image:
            "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
    },
    {
        id: "m2",
        title: "Second meetup",
        address: "Andrea Metaxa 15",
        description: "my amazing second meetup description",
        image:
            "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg",
    },
];

const AllMeetupsPage = () => {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
};

export default AllMeetupsPage;
