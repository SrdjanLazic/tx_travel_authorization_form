import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {
    return (
        <header>
            <nav>
                <ul className={"nav-list"}>
                    <div id={"navbar"}>
                        <li className={"nav-item"}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className={"nav-item hide"}>
                            <Link to={"/form"}>Form</Link>
                        </li>
                        <li className={"nav-item hide"}>
                            <Link to={"/form-after"}>TEF</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;