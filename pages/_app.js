import '../styles/globals.css'
import Head from 'next/head';
//Search -> https://search.google.com/search-console/about
const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"></link>
        </Head>
        <Component {...pageProps} />
    </div>
    
  );
}

export default MyApp