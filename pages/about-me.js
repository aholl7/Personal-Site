import Header from "../components/Header.js";
import Head from "next/head";
import PlaceHolder from "../components/placeholder";
import Smile from "../public/images/Smile.png";
import GradCap from "../public/images/GradCap.png";
import Briefcase from "../public/images/Briefcase.png";
import PV from "../public/images/PVAMULogo.png";
import AIG from "../public/images/AIG.png";
import GF from "../public/images/GeorgeFoundation.png"
import Image from "next/image";
const AboutMe = () => {
    return (
        <div className="container w-screen pb-10">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <h1 className="text-5xl mt-5 text-center">ABOUT ME</h1>
                <div className="grid grid-cols-2 gap-2 mt-20" >
                    <div>
                        <div className="float-right mr-40">
                            <Image src={Smile} height={340} width={310} />
                        </div>
                        
                    </div>
                    <div className="w-4/5 text-xl">
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
                <div className="grid grid-cols-2 gap-2 mt-20">
                    <div>
                        <div className="flex ml-auto mr-0">
                            <div className="ml-auto mr-0" >
                                <Image src ={GradCap} height={40} width={55}/>
                            </div>
                            
                            <div>
                                <p className="text-2xl font-semibold mt-2">Education</p>
                                <div className="mt-3 ">
                                    <div className="flex">
                                        <div className="mt-3">
                                            <Image className="rounded-lg" src={PV} height={50} width={50}/>
                                        </div>
                                        <div className="ml-7">
                                            <h1 className="text-xl mt-2 font-semibold">Prarie View A&M University</h1>
                                            <p className="mt-1">Computer Science | 3.8</p>
                                            <p className="mt-1">2018 - 2022</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex ml-20">
                            <div>
                                <Image src ={Briefcase} height={40} width={55}/>
                            </div>
                            
                            <div>
                                <p className="text-2xl font-semibold mt-2">Experience</p>
                                <div className="mt-3 ">
                                    <div className="flex">
                                        <div className="mt-3">
                                            <Image className="rounded-lg" src={AIG} height={50} width={50}/>
                                        </div>
                                        <div className="ml-7">
                                            <p className="mt-2">2022 - </p>
                                            <p className="mt-1 text-xl font-semibold">Technology Analyst</p>
                                            <p className="mt-1">AIG</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-8">
                                        <div className="mt-3">
                                            <Image className="rounded-lg" src={AIG} height={50} width={50}/>
                                        </div>
                                        <div className="ml-7">
                                            <p className="mt-2">2021</p>
                                            <p className="mt-1 text-xl font-semibold">Technology Analyst Intern</p>
                                            <p className="mt-1">AIG</p>
                                        </div>
                                    </div>
                                    <div className="flex mt-8">
                                        <div className="mt-3">
                                            <Image className="rounded-lg" src={GF} height={50} width={50}/>
                                        </div>
                                        <div className="ml-7">
                                            <p className="mt-2">2017-2018 </p>
                                            <p className="mt-1 text-xl font-semibold">Volunteer</p>
                                            <p className="mt-1">George Foundation</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </main>
            
        </div>
    );
}

export default AboutMe;