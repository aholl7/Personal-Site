import Image from "next/image";
import GitHub from "../public/images/GitHub.png";
const Skills = () => {
    return (
        <div id="skills">
            <br/>
            <h1 className="text-5xl mt-20 font-bold lg:ml-0 ml-2">SKILLS</h1>
            <p className="text-gray-400 mt-5 lg:ml-0 ml-2">Technologies I have worked with.</p>
            
            
            <div class="lg:grid lg:grid-cols-3 lg:gap-3 m-auto w-full">
                <div className="mt-10">
                    <h2 className="text-3xl text-center">Front End</h2>
                    <div className="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="ml-auto mr-auto" height={100} width={100} />
                            <p className="text-center mt-2 text-lg font-semibold">HTML</p>
                        </div>
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="ml-auto mr-auto"height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">CSS</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="ml-auto mr-auto "height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">JavaScript</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="ml-auto mr-auto  "height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">ReactJS</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" className="ml-auto mr-auto"height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">NextJS</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="ml-auto mr-auto  "height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">Material UI</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="ml-auto mr-auto"height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">Tailwind</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:ml-auto lg:mr-auto">
                    <h2 className="text-3xl text-center">Back End</h2>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="ml-auto mr-auto  " height={100} width={100} />
                            <p className="text-center mt-2 text-lg font-semibold">Firebase</p>
                        </div>
                        <div className="text-center ml-5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className="ml-auto mr-auto"height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">MySQL</p>
                        </div>
                        
            
                    </div>
                </div>
                <div className="mt-10 lg:ml-10">
                    <h2 className="text-3xl text-center">Tools</h2>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="ml-auto mr-auto  " height={100} width={100} />
                            <p className="text-center mt-2 text-lg font-semibold">GitHub</p>
                        </div>
                        <div className="text-center ml-5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="ml-auto mr-auto  "height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">Git</p>
                        </div>
                        <div className="text-center lg:ml-5 mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="ml-auto mr-auto  "height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">Figma</p>
                        </div>
                        
            
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-3xl text-center">Programming Languages</h2>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="ml-auto mr-auto" height={100} width={100} />
                            <p className="text-center mt-2 text-lg font-semibold">Python</p>
                        </div>
                        <div className="text-center ml-5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" className="ml-auto mr-auto"height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">Java</p>
                        </div>
                        <div className="text-center ml-5 mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="ml-auto mr-auto"height={100} width={100}/>
                            <p className="text-center mt-2 text-lg font-semibold">C++</p>
                        </div>
                        
            
                    </div>
                    
                    
                </div>
                <div className="mt-10 lg:ml-10 ml-5">
                    <h2 className="text-3xl text-center">Unit Testing</h2>
                        <div class="grid grid-cols-2 gap-2 mt-5">
                            <div className="text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg" className="ml-auto mr-auto  " height={100} width={100} />
                                <p className="text-center mt-2 text-lg font-semibold">Karma</p>
                            </div>
                            <div className="text-center ml-5">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain-wordmark.svg" className="ml-auto mr-auto  "height={100} width={100}/>
                                <p className="text-center mt-2 text-lg font-semibold">Jasmine</p>
                            </div>
                        </div>
                    
                </div>
            </div>
            
            

            

            

            
           
            
        </div>
    );
}

export default Skills;