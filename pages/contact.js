import Header from "../components/Header.js";
import PlaceHolder from "../components/placeholder";
import Head from "next/head";
const Contact = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Header />
                <PlaceHolder />
            </div>
            
        </div>
    );
}

export default Contact;