import Image from "next/image";
import GitHub from "../public/images/GitHub.png";
const Skills = () => {
    return (
        <div id="skills">
            <br/>
            <h1 className="text-5xl text-center mt-20">SKILLS</h1>
            <div className="grid grid-cols-4 gap-3 ml-10 mt-10">
                <div className="flex">
                    <p>Academic</p>
                    <hr className="w-1/4 h-3 bg-purple-600 border-purple-600 ml-2 mt-1.5" />
                </div>
                
                <div className="flex">
                    <p>Beginner</p>
                    <hr className="w-1/4 h-3 bg-sky-500 border-sky-500 ml-2 mt-1.5" />
                </div>
                <div className="flex">
                    <p>Good</p>
                    <hr className="w-1/4 h-3 bg-yellow-400 border-yellow-400 ml-2 mt-1.5" />
                </div>
                <div className="flex">
                    <p>Great</p>
                    <hr className="w-1/4 h-3 bg-green-500 border-green-500 ml-2 mt-1.5" />
                </div>
                
                
            
            </div>
            
            
            <div class="grid grid-cols-3 gap-3 m-auto w-full">
                <div className="mt-10 ml-5">
                    <h2 className="text-3xl text-center">Front End</h2>
                    <div className="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="border-b border-green-500 ml-auto mr-auto" height={150} width={150} />
                            <p className="text-center mt-2 text-lg">HTML</p>
                        </div>
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="ml-auto mr-auto border-b border-green-500"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">CSS</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="ml-auto mr-auto border-b border-green-500"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">JavaScript</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="ml-auto mr-auto border-b border-yellow-400"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">ReactJS</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" className="ml-auto mr-auto border-b border-sky-500"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">NextJS</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="ml-auto mr-auto border-b border-yellow-400"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">Material UI</p>
                        </div>
                        <div className="text-center mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="ml-auto mr-auto border-b border-sky-500"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">Tailwind</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 ml-auto mr-auto">
                    <h2 className="text-3xl text-center">Back End</h2>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="ml-auto mr-auto border-b border-yellow-400" height={150} width={150} />
                            <p className="text-center mt-2 text-lg">Firebase</p>
                        </div>
                        <div className="text-center ml-5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className="ml-auto mr-auto border-b border-purple-600"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">MySQL</p>
                        </div>
                        
            
                    </div>
                </div>
                <div className="mt-10 ml-10">
                    <h2 className="text-3xl text-center">Tools</h2>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="ml-auto mr-auto border-b border-yellow-400" height={150} width={150} />
                            <p className="text-center mt-2 text-lg">GitHub</p>
                        </div>
                        <div className="text-center ml-5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="ml-auto mr-auto border-b border-yellow-400"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">Git</p>
                        </div>
                        <div className="text-center ml-5 mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="ml-auto mr-auto border-b border-yellow-400"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">Figma</p>
                        </div>
                        
            
                    </div>
                </div>
                <div className="mt-10 ml-10">
                    <h2 className="text-3xl text-center">Programming Languages</h2>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="ml-auto mr-auto border-b border-sky-500" height={150} width={150} />
                            <p className="text-center mt-2 text-lg">Python</p>
                        </div>
                        <div className="text-center ml-5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" className="ml-auto mr-auto border-b border-purple-600"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">Java</p>
                        </div>
                        <div className="text-center ml-5 mt-10">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="ml-auto mr-auto border-b border-purple-600"height={150} width={150}/>
                            <p className="text-center mt-2 text-lg">C++</p>
                        </div>
                        
            
                    </div>
                    
                    
                </div>
                <div className="mt-10 ml-10">
                    <h2 className="text-3xl text-center">Unit Testing Frameworks</h2>
                        <div class="grid grid-cols-2 gap-2 mt-5">
                            <div className="text-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg" className="ml-auto mr-auto border-b border-yellow-400" height={150} width={150} />
                                <p className="text-center mt-2 text-lg">Karma</p>
                            </div>
                            <div className="text-center ml-5">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain-wordmark.svg" className="ml-auto mr-auto border-b border-yellow-400"height={150} width={150}/>
                                <p className="text-center mt-2 text-lg">Jasmine</p>
                            </div>
                        </div>
                    
                </div>
            </div>
            
            

            

            

            
           
            
        </div>
    );
}

export default Skills;