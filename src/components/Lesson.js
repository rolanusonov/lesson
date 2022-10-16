import React from 'react';
import {baktiyar, bekbol, dastan, medil, rolan, taalai} from "./home/fake";
import {Link} from "react-router-dom";

const Lesson = () => {
    return (
        <div className="container">
            <div className="mentor">
                <Link to="/" className="link">
                    <div className=" blockNaz">
                        <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.0607 13.0607C38.6464 12.4749 38.6464 11.5251 38.0607 10.9393L28.5147 1.3934C27.9289 0.807611 26.9792 0.807611 26.3934 1.3934C25.8076 1.97919 25.8076 2.92893 26.3934 3.51472L34.8787 12L26.3934 20.4853C25.8076 21.0711 25.8076 22.0208 26.3934 22.6066C26.9792 23.1924 27.9289 23.1924 28.5147 22.6066L38.0607 13.0607ZM0 13.5L37 13.5V10.5L0 10.5L0 13.5Z" fill="white"/></svg>
                        <h1 className="naz"> Назад</h1>
                    </div>
                </Link>
                <ol className="NameMentor">
                    <Link className="link  " to="/rolan">
                        <li className="mentors">
                            {
                                rolan.map(el => (
                                    <p>{el.name}</p>
                                ))
                            }
                        </li>
                    </Link>
                    <Link className="link  " to="/bekbol">
                        <li className="mentors">
                            {
                                bekbol.map(el => (
                                    <p>{el.name}</p>
                                ))
                            }
                        </li>
                    </Link>
                    <Link className="link  " to="/taalai">
                        <li className="mentors">
                            {
                                taalai.map(el => (
                                    <p>{el.name}</p>
                                ))
                            }
                        </li>
                    </Link>
                    <Link className="link  " to="/baktier">
                        <li className="mentors">
                            {
                                baktiyar.map(el => (
                                    <p>{el.name}</p>
                                ))
                            }
                        </li>
                    </Link>
                    <Link className="link  " to="/medil">
                        <li className="mentors">
                            {
                                medil.map(el => (
                                    <p>{el.name}</p>
                                ))
                            }
                        </li>
                    </Link>
                    <Link className="link  " to="/dastan">
                        <li className="mentors">
                            {
                                dastan.map(el => (
                                    <p>{el.name}</p>
                                ))
                            }

                        </li>
                    </Link>

                </ol>
            </div>

        </div>

    );
};

export default Lesson;