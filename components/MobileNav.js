import Link from 'next/link';
import Image from 'next/image';
import NavIcon from "../public/images/NavIcon.png";


const MobileNavBar = (props) => {
    return (
        <div>
            <div className="float-right mt-7 mr-2 relative inline-block bottom-0 lg:hidden cursor-pointer" onClick={props.displayNav}>
                <Image src={NavIcon} height={30} width={30} />
            </div>
            
        </div>
            
        
    );
}

export default MobileNavBar;