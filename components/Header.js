import NavBar from "../components/Nav.js";
import Logo from "../public/images/logo.png";
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <Image src={Logo} height={90} width={152}/>
            <NavBar />
        </div>

    );
}

export default Header;