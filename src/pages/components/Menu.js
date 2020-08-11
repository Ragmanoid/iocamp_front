import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../css/Menu.scss';

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" className='menu'>
            <div className='container'>
                <Link to='/' className='brand'>
                    <Navbar.Brand>
                        Инженерная Долина
                    </Navbar.Brand>
                </Link>
            </div>
        </Navbar>
    )
}

export default Menu;