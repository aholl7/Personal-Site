import Link from "next/link";

const NavComponent = () => {
    return (
        <div className="z-10 shadow-2xl bg-slate-800 absolute w-full pb-10 lg:hidden">
            <br />
            <Link href="/">
                <a className="text-white mt-10 text-xl font-bold ml-2">Home</a>
            </Link><br /><br /><br />
            <Link href="/about-me">
                <a className="text-white mt-10 text-xl font-bold ml-2">About</a>
            </Link><br /><br /><br />
            <Link href="/about-me/#skills">
                <a className="text-white mt-5 text-xl font-bold ml-2">Skills</a>
            </Link><br /><br /><br />
            <Link href="/projects">
                <a className="text-white mt-5 text-xl font-bold ml-2">Projects</a>
            </Link><br /><br /><br />
            <Link href="/contact">
                <a className="text-white mt-5 text-xl font-bold ml-2">Contact</a>
            </Link><br />
            
            
        </div>

    );
}

export default NavComponent;