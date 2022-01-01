import Head from "next/head";
import NavBar from "../components/NavBar";
import '../styles/global.css';
function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <header>
                <NavBar />
            </header>
            <Component{...pageProps} />
        </>
    );
}
export default App;