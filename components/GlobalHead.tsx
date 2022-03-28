import Head from "next/head";

export default function GlobalHead({pageName}: { pageName: string }) {
    const seoTitle = "TiMyTi11"
    const seoDescription = "I make discord servers, and I am a great staff to hire!"
    const url = "https://timyti11.com"
    const logo = "/logo.png"

    return (
        <Head>
            <meta charSet="utf-8"/>

            <title>{seoTitle + " - " + pageName}</title>
            <meta name="description" content={seoDescription}/>

            <link rel="icon" href="/favicon.ico"/>

            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>

            <meta name="format-detection" content="telephone=no"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <meta name="og:type" content="website"/>
            <meta name="og:url" content={url}/>
            <meta name="og:title" content={seoTitle}/>
            <meta name="og:url" content={url}/>
            <meta name="og:description" content={seoDescription}/>
            <meta name="og:image" content={logo}/>

            <meta name="theme-color" content={"#FE00CD"}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:url" content={url}/>
            <meta name="twitter:title" content={seoTitle}/>
            <meta name="twitter:description" content={seoDescription}/>
            <meta name="twitter:image" content={logo}/>
            <meta name="twitter:image:alt" content="TiMyTi11 logo"/>
        </Head>
    )
}
