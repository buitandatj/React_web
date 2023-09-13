import './style.scss';

import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    return (
        <header className='header'>
            <div className='container-header'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='menu'>
                    <ul className='menu-header'>
                        <li><NavLink to="/">Trang chủ</NavLink></li>
                        <li><NavLink to="/store">Store</NavLink></li>
                        <li><NavLink to="/intro">Giới thiệu</NavLink></li>
                    </ul>
                </div>

                <div className='cart flex'>
                    <FaCartShopping  className='h-[27px] w-[27px]'/>
                    <div>(0)</div>
                </div>
            </div>
        </header>
    );
};

export default Header;