import React from 'react';

import './styles.css';

import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={heroesImg} alt="Heroes" className="src"/>
            </section>
        </div>
    );
}