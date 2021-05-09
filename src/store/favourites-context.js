import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
});

const FavouritesContextProvider = ({ chilren }) => {
    const [userFavourites, setUserFavourites] = useState([]);

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
