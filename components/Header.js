import React, { useState, useEffect } from 'react';
import NavBar from "../components/Nav.js";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import MobileNavBar from "../components/MobileNav.js";
import NavComponent from "../components/MNavComp.js";
import Link from 'next/link';
const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    
    const showMobileNav = (e) => {
        e.preventDefault();
        isClicked === false ? setIsClicked(true) : setIsClicked(false);
        
    }
    
    return (
        <div id = "topNav">
            <div className="flex">
                <div>
                    <h1 className="text-5xl font-bold mt-5 text-red-500">{"< "}AH{" />"}</h1>
                </div>
                <div className="ml-auto">
                    <NavBar />
                    <MobileNavBar displayNav={showMobileNav}/>
                </div>
                
                
            </div>
            {isClicked === true && (
                <NavComponent />

            )}
            
        </div>

    );
}

export default Header;