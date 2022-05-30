import Header from "../components/Header.js";
import React, {useState, useEffect } from 'react';
import Head from "next/head";
import ProjectBox from "../components/ProjectBox.js";
const Portfolio = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    const toggleModal = () => {
        setHasBeenClicked(true);
        if(isClicked){
            setIsClicked(false);
            document.querySelector(".content").style.opacity = "1";
            document.querySelector("#myNav").style.opacity = "1";
        }else{
            setIsClicked(true);
            document.querySelector(".content").style.opacity = "0.5";
            document.querySelector("#myNav").style.opacity = "0.5";
        }
        
    }
    useEffect(()=> {
        document.querySelector(".content").style.opacity = "1";
        
      }, []);
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {isClicked && (
                
                <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ml-auto mr-auto mt-20">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Private Repository
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Since PantherHub was a unique Senior Design project at my university, the repository is private. If you want to view PantherHub, click the Demo button to see a recording of the project in action! This recording took place during the presentation of the project, however, I have removed the audio and have sped up just a little for time purposes.
                                </p>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                )}
            <main className="content lg:w-11/12 md:w-full ml-auto mr-auto relative pb-10" style={{opacity: "0", transition: !hasBeenClicked ? "opacity 3s" : "none"}}>
                <div className="md:w-full md:ml-0 md:mr-0 w-11/12 ml-auto mr-auto">
                    <div className="xl:ml-0 ml-4 mt-20">
                        <h1 className="text-5xl font-bold">PROJECTS</h1>
                        <p className="text-gray-400 mt-5">Here is a collection of my personal projects.</p>
                    </div>
                     
                    <div className="xl:grid xl:grid-cols-2 xl:gap-5 xl:w-auto xl:ml-0 xl:mr-0 mt-10 grid grid-cols-1 gap-5 w-11/12 ml-auto mr-auto">
                        <ProjectBox 
                            title={"Personal Site"}
                            tags={["ReactJS", "NextJS", "TailwindCSS"]}
                            description={"This is currently the site you are viewing now! This site was designed for providing you the ability to learn a little more about me."}
                            link={"https://github.com/aholl7/Personal-Site"}
                            demoLink={"https://personal-site-aholl7.vercel.app/"}
                            isPublic={true}
                        />
                        <ProjectBox 
                            title={"PantherHub"}
                            tags={["ReactJS", "Material UI", "CSS", "Firebase"]}
                            description={"PantherHub is a social media web application for students at my college to provide them an outlet to find like-minded individuals and connect with other students across campus."}
                            isPublic={false}
                            demoLink={"https://drive.google.com/file/d/14b5MF01LxwQgcABE2zMXHMCM3aplCloM/view?usp=sharing"}
                            toggleModal={toggleModal}
                        />
                        <ProjectBox 
                            title={"Budget App"}
                            tags={["HTML", "CSS", "JavaScript", "Firebase"]}
                            description={"You have the ability to add expenses that you will be encountering whether monthly or by semester and income that you incur whether monthly or by semester."}
                            link={"https://github.com/aholl7/BudgetApplication"}
                            demoLink={"https://github.com/aholl7/BudgetApplication"}
                            isPublic={true}
                        />
                        <ProjectBox 
                            title={"Presidential Understanding"}
                            tags={["HTML", "CSS", "JavaScript"]}
                            description={"Presidential Understandng is an educational site that informs viewers of the site about all the presidents of the United States of America. "}
                            link={"https://github.com/aholl7/presidentalunderstanding.github.io"}
                            demoLink={"http://presidentalunderstanding-github-io.vercel.app/"}
                            isPublic={true}
                        />
                        
                    </div>
                    

                </div>
                
                
                
                
                
            </main>
            
        </div>
    );
}

export default Portfolio;