import Head from 'next/head';
import Header from "../components/Header.js";
import HomeImage from "../public/images/homeImage.svg";
import Image from 'next/image';
import GitHub from "../public/images/GitHub.png";
import LinkedIn from "../public/images/LinkedIn.png";
import Link from 'next/link';
export default function Home() {
  const openLinkedIn = (e) => {
    e.preventDefault();
    const url = "https://www.linkedin.com/in/alfred-holland-72556a187/";
    window.location.href = url;
  }

  const openGitHub = (e) => {
    e.preventDefault();
    const url = "https://github.com/aholl7";
    window.location.href = url;
  }

  const displayResume = (e) => {
    e.preventDefault();
    const url = "https://drive.google.com/file/d/1k4uWGWAGltnCodfkJrWE5ibRCsohJzGl/view?usp=sharing";
    window.location.href = url;
  }

  const openEmail = (e) => {
    e.preventDefault();
    window.location.href="mailto:alfredholland6@gmail.com";
  }

  return (
    <div className="container w-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="grid gap-2 grid-cols-2 w-screen">
          <div>
            <div className="mt-40 ml-40">
              <h1 className="text-5xl font-bold">Welcome! I'm Alfred!</h1><br />
              <p className="text-3xl font-semibold text-gray-400">Technology Analyst</p><br />
              <p className="text-3xl text-gray-400 w-2/3">I genuinely enjoy seeking learning opportunities and producing high quality work</p>
            </div><br />
            <div className="flex ml-40">
              <button className="bg-red-500 w-60 font-bold text-xl pt-3 pb-3 rounded-l rounded-r" onClick={(e) => displayResume(e)}>View Resume</button>
              <button className="bg-red-500 ml-10 font-bold w-60 text-xl rounded-l rounded-r" onClick={(e) => openEmail(e)}>Contact Me</button>
            
            </div><br /><br />
            <div className="flex ml-40">
              <div>
                <Image src={LinkedIn} height={40} width={40} className="cursor-pointer" onClick={(e) => openLinkedIn(e)}/>
              </div>
              <div className="ml-5">
                <Image src={GitHub} height={40} width={40} className="cursor-pointer" onClick={(e) => openGitHub(e)}/>
              </div>
              
              
            </div>
          </div>
          <div>
            <div className="mt-32">
              <Image src={HomeImage} />
            </div>
            
          </div>

        </div>
      </main>


     
    </div>
  )
}
