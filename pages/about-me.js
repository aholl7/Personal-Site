import Header from "../components/Header.js";
import Head from "next/head";
import Image from "next/image";
import Smile from "../public/images/Smile.png";
import Journey from "../components/Journey.js"
import Skills from "../components/Skills.js";


const AboutMe = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pb-10 w-4/5 ml-auto mr-auto">
                <Header />
                <div>
                    <h1 className="text-5xl mt-20 font-bold">ABOUT ME</h1>
                    <div className="grid grid-cols-2 gap-2 mt-20" >
                        <div>
                            <div className="float-right mr-40">
                                <Image src={Smile} height={340} width={310} />
                            </div>
                            
                        </div>
                        <div className="text-xl">
                            <p>
                                Hello! I am Alfred Holland, a Technology Analyst from Houston and 
                                a graduate of Prairie View A&M University with a Bachelor of Science 
                                in Computer Science. I love trying my hardest and doing my best, 
                                whether playing the piano, coding, or doing anything in life. With 
                                Web Development specifically, I love turning ideas that are thought 
                                up into reality through code and creating user-friendly applications 
                                that users can enjoy.
                            </p><br />
                            <p>
                                I look forward to being able to learn and continue to improve in my journey 
                                in Technology. The beauty of Technology is that there is always something 
                                new and innovative being created. I want to be a part of utilizing those 
                                creative ideas and creating my own.
                            </p>
                            
                            
                        </div>
                    </div>
                    <Journey />
                    
                    <Skills />
                </div>
                
                

            </main>
            
        </div>
    );
}

export default AboutMe;