import Header from "../components/Header.js";
import Head from "next/head";
import ProjectBox from "../components/ProjectBox.js";
const Portfolio = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="xl:w-4/5 w-full ml-auto mr-auto pb-10">
                <Header />
                <h1 className="text-5xl mt-20 font-bold">PROJECTS</h1>
                <p className="text-gray-400 mt-5">Here is a collection of my personal projects.</p>
                <div class="xl:grid xl:grid-cols-2 xl:gap-5 mt-10 grid grid-cols-1 gap-5 w-auto">
                    <ProjectBox 
                        title={"Personal Site"}
                        tags={["ReactJS", "NextJS", "TailwindCSS"]}
                        description={"This is currently the site you are viewing now!"}
                        link={"https://github.com/aholl7/Personal-Site"}
                        isPublic={true}
                    />
                    <ProjectBox 
                        title={"PantherHub"}
                        tags={["ReactJS", "React-Router", "Material UI", "CSS", "Firebase"]}
                        description={"PantherHub is a social media web application for students at my college to provide them an outlet to find like-minded individuals and connect with other students across campus."}
                        isPublic={false}
                    />
                    <ProjectBox 
                        title={"Budget App"}
                        tags={["HTML", "CSS", "JavaScript", "Firebase"]}
                        description={"You have the ability to add expenses that you will be encountering whether monthly or by semester and income that you incur whether monthly or by semester."}
                        link={"https://github.com/aholl7/BudgetApplication"}
                        isPublic={true}
                    />
                    <ProjectBox 
                        title={"Presidential Understanding"}
                        tags={["HTML", "CSS", "JavaScript"]}
                        description={"Presidential Understandng is an educational site that informs viewers of the site about all the presidents of the United States of America. "}
                        link={"https://github.com/aholl7/presidentalunderstanding.github.io"}
                        isPublic={true}
                    />
                    
                </div>
            </main>
        </div>
    );
}

export default Portfolio;