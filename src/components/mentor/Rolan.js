import React from 'react';
import {rolan} from "../home/fake";
import {Link} from "react-router-dom";

const Rolan = () => {
    return (
        <section>
            <div className="container">

                <div className="detailMen">
                    <Link to="/lesson" className="link">
                    <div className=" blockNaz">
                        <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.0607 13.0607C38.6464 12.4749 38.6464 11.5251 38.0607 10.9393L28.5147 1.3934C27.9289 0.807611 26.9792 0.807611 26.3934 1.3934C25.8076 1.97919 25.8076 2.92893 26.3934 3.51472L34.8787 12L26.3934 20.4853C25.8076 21.0711 25.8076 22.0208 26.3934 22.6066C26.9792 23.1924 27.9289 23.1924 28.5147 22.6066L38.0607 13.0607ZM0 13.5L37 13.5V10.5L0 10.5L0 13.5Z" fill="white"/>
                        </svg>

                        <h1 className="naz">  Назад</h1>
                    </div>

                </Link>
                    {
                        rolan.map(el => (
                            <a href={el.link} className="link arrow">
                            <h1 className="detailName"> {el.group}</h1>
                                <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.0607 13.0607C38.6464 12.4749 38.6464 11.5251 38.0607 10.9393L28.5147 1.3934C27.9289 0.807611 26.9792 0.807611 26.3934 1.3934C25.8076 1.97919 25.8076 2.92893 26.3934 3.51472L34.8787 12L26.3934 20.4853C25.8076 21.0711 25.8076 22.0208 26.3934 22.6066C26.9792 23.1924 27.9289 23.1924 28.5147 22.6066L38.0607 13.0607ZM0 13.5L37 13.5V10.5L0 10.5L0 13.5Z" fill="white"/>
                                </svg>

                            </a>



                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default Rolan;