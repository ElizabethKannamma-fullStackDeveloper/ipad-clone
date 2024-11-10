import React from 'react'
import ipad from "../images/ipad.svg"
import ipad1 from "../images/ipad1.svg"
import pencil from "../images/pencil.svg"
import keyboard from "../images/keyboard.svg"
import compare from "../images/compare.svg"
import IOS from "../images/ios.svg"
import shop from "../images/shop.svg"
import accessories from "../images/accessories.svg"
import ipad_mini from "../images/ipad_mini.svg"
import ipadair from "../images/ipad_air.svg"

function Navbar1() {
    return (
        <>
            <nav className="navbar1">
                <ul>
                    <li>
                        <a href="#">
                            <img src={ipad} alt="iPad Pro" />
                            <span>iPad Pro</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={ipadair} alt="iPad Air" />
                            <span>iPad Air</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={ipad1} alt="iPad" />
                            <span>iPad</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={ipad_mini} alt="iPad mini" />
                            <span>iPad mini</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={compare} alt="Compare" />
                            <span>Compare</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={pencil} alt="Apple Pencil" />
                            <span>Apple Pencil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={keyboard} alt="Keyboards" />
                            <span>Keyboards</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={accessories} alt="Accessories" />
                            <span>Accessories</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={IOS} alt="iPadOS 18" />
                            <span>iPadOS 18</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={shop} alt="Shop iPad" />
                            <span>Shop iPad</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar1