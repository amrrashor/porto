import React from "react";
import CardItem from "../cardItem/CardItem";
import './_cards.scss';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out this epic destinations!</h1>
            <div className="cards__container">
                    <ul className="cards__items">
                        <CardItem />
                    </ul>
            </div>
        </div>
    );
}

export default Cards;