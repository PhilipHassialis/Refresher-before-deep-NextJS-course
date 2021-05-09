import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = (props) => {
    const savedMeetups = localStorage.getItem("refresh.course.favourites");

    const [userFavourites, setUserFavourites] = useState(
        savedMeetups ? JSON.parse(savedMeetups) : []
    );

    const addFavouriteHandler = (favouriteMeetup) => {
        setUserFavourites((prevState) => {
            const newMeetups = prevState.concat(favouriteMeetup);
            localStorage.setItem(
                "refresh.course.favourites",
                JSON.stringify(newMeetups)
            );
            return newMeetups;
        });
    };

    const removeFavouriteHandler = (meetupId) => {
        setUserFavourites((prevState) => {
            return prevState.filter((meetup) => meetup.id !== meetupId);
        });
    };

    const itemIsFavouriteHandler = (meetupId) => {
        return userFavourites.some((meetup) => meetup.id === meetupId);
    };

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    };

    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesContext;
