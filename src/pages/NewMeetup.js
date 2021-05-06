import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const addMeetupHandler = (meetupData) => {};

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetupPage;
