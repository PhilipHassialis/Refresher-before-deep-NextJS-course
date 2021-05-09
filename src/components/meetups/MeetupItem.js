import React, { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

const MeetupItem = (props) => {
    const favouritesCtx = useContext(FavouritesContext);
    const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

    const toggleFavouriteStatusHandler = () => {
        if (itemIsFavourite) favouritesCtx.removeFavourite(props.id);
        else favouritesCtx.addFavourite({ ...props });
    };

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>
                        {itemIsFavourite ? "Remove Favourite" : "To favourites"}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
