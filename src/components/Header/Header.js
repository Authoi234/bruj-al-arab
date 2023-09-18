import React from 'react';
import '../../App.css'

const Header = () => {
    return (
        <div>
            <div className='App-header'>
                <h3 style={{color: 'rgb(188, 168, 21)'}}>HOTELS IN DUBAI</h3>
                <h1 style={{color:'white', fontSize: '400%'}}>𝗕𝘂𝗿𝗷 𝗔𝗹 𝗔𝗿𝗮𝗯 𝗝𝘂𝗺𝗲𝗶𝗿𝗮𝗵</h1>
                <h1 style={{color: 'white'}}>A global icon of Arabian luxury</h1>
            </div>
            <video style={{marginTop: '-122px'}} height={1000} width={1334} autoPlay loop muted>
                <source src={require('../../assests/BurjAlArab.mp4')} type='video/mp4' />
            </video>
        </div>
    );
};

export default Header;