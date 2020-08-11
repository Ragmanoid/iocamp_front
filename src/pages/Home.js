import React from 'react';
import '../css/Home.scss';

import logo from '../img/logoBigBoy.png';
import News from "./components/News";

const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <div className='container'>
                    <div className='title'>
                        <div className='iocamp'>IOCAMP.RU | Модуль «Смена»</div>
                        <div className='name'>Инженерная долина</div>
                        <div className='version'>Версия: R3.0</div>
                    </div>
                    <img className='logo' src={logo} alt='' />
                </div>
            </div>
            <div className='container'>
                <News />
            </div>
        </div>
    )
}

export default Home;