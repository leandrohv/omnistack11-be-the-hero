import React from 'react';

import './styles.css';

import heroesImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logomarca" />
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}