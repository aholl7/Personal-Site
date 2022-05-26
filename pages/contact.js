import Header from "../components/Header.js";
import PlaceHolder from "../components/placeholder";
import Head from "next/head";
import Image from "next/image";
import Email from "../public/images/mail.png";
import Phone from "../public/images/phone.png";
import LinkedIn from "../public/images/LinkedIn2.png";
import Link from "next/link";
const Contact = () => {
    const openEmail = (e) => {
        e.preventDefault();
        window.open("mailto:alfredholland6@gmail.com");
    }
    const openLinkedIn = (e) => {
        e.preventDefault();
        const url = "https://www.linkedin.com/in/alfred-holland-72556a187/";
        window.open(url);
    }
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="lg:w-11/12 md:w-full ml-auto mr-auto relative pb-10">
                <Header />
                <div className="ml-auto mr-auto">
                    <h1 className="text-5xl mt-20 font-bold text-center">CONTACT ME</h1>
                </div>
                <div class="xl:grid xl:grid-cols-3 xl:gap-5 xl:w-auto xl:ml-0 xl:mr-0 mt-10 grid grid-cols-1 gap-5 w-11/12 ml-auto mr-auto">
                      <div>
                          <div className="text-center">
                            <Image src={Email} height={100} width={100} />
                            <h1 className="text-2xl font-bold mt-2">EMAIL</h1>
                            <p className="text-xl font-medium mt-2 cursor-pointer hover:text-red-500" onClick={(e)=>openEmail(e)}>alfredholland6@gmail.com</p>
                          </div>
                          
                         
                      </div>
                      <div>
                        <div className="text-center">
                            <Image src={LinkedIn} height={100} width={100} />
                            <h1 className="text-2xl font-bold mt-2">LINKEDIN</h1>
                            <p className="text-xl font-medium mt-2 cursor-pointer hover:text-red-500" onClick={(e)=>openLinkedIn(e)}>View Profile</p>
                        </div>
                      </div>
                      <div>
                        <div className="text-center">
                        <Image src={Phone} height={100} width={100} />
                            <h1 className="text-2xl font-bold mt-2">PHONE</h1>
                            <p className="text-xl font-medium mt-2">210-782-8839</p>
                        </div>
                      </div>
                        
                </div>
                
                        
                    
                
            </main>
        </div>
    );
}

export default Contact;