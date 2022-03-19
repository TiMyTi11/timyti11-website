import '../styles/globals.css'
import '../styles/font.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";

function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
