import React from 'react'
import applelogo from "../images/applelogo.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><a href="#"><img src={applelogo} alt="Apple Logo" /></a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">TV & Home</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#"><SearchOutlinedIcon /></a></li>
                    <li><a href="#"><WorkOutlineOutlinedIcon /> </a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar