import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const addMeetupHandler = (meetupData) => {
        fetch(
            "https://react-refresher-course-b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
    };

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetupPage;
