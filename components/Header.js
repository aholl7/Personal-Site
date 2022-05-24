import NavBar from "../components/Nav.js";
import Logo from "../public/images/logo.png";
import Image from "next/image";

const Header = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <h1 className="text-5xl font-bold mt-5 text-red-500">{"< "}AH{" />"}</h1>
            <NavBar />
        </div>

    );
}

export default Header;