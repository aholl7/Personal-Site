import GradCap from "../public/images/GradCap.png";
import Briefcase from "../public/images/Briefcase.png";
import PV from "../public/images/PVAMULogo.png";
import AIG from "../public/images/AIG.png";
import GF from "../public/images/GeorgeFoundation.png"
import Image from "next/image";

const Journey = () => {
    return (
        <div className="mt-32">
            <h1 className="text-5xl font-bold lg:ml-0 ml-2">MY JOURNEY</h1>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 mt-12">
                
                <div>
                    <div className="flex ml-auto mr-0">
                        <div className="lg:ml-auto lg:mr-0 ml-2" >
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
                    <div className="flex lg:ml-20 lg:mt-0 ml-2 mt-10">
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
        </div>

    );
}

export default Journey;