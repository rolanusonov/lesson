import React from 'react';
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="home">
                    <Link className="link " to="all">
                        <h1>Все</h1>
                    </Link>
                    <Link className='link' to="/lesson">
                        <h1>Mentors</h1>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Home;