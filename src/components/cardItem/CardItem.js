import React from "react";
import { Link } from "react-router-dom";
import Db from './Db'
import './_carditem.scss'

const CardItem = () => {
    return (
        <>
            <li className="single-card">
                {Db.map(e => {
                    return (
                        <Link key={e.id} to={e.path} className="cards__item__link">
                        <figure className="cards__item__pic-wrap" data-category={e.label}>
                            <img src={e.src} alt="Travel Image" className="cards__item__img" />
                        </figure>
                        <div className="cards__item__info">
                                <h5 className="cards__item__text">{ e.text }</h5>
                        </div>
                    </Link>
                    )
                })}
            </li>
        </>
    );
}

export default CardItem;