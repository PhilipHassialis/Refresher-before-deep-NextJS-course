import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
});

const FavouritesContextProvider = ({ chilren }) => {
    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouriteHandler = (favouriteMeetup) => {
        setUserFavourites((prevState) => {
            return prevState.concat(favouriteMeetup);
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
    };

    return (
        <FavouritesContext.Provider value={context}>
            {chilren}
        </FavouritesContext.Provider>
    );
};

export default FavouritesContextProvider;
