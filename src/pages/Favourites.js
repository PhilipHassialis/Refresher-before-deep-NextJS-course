import React, { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavouritesPage = () => {
    const favouritesCtx = useContext(FavouritesContext);

    let content;
    if (favouritesCtx.totalFavourites === 0)
        content = <p>You got no favourites yet</p>;
    else content = <MeetupList meetups={favouritesCtx.favourites}></MeetupList>;

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
};

export default FavouritesPage;
