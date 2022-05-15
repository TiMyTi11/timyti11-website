import {NextPage} from "next";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import TopAd from "./TopAd";
import ContactMe from "./ContactMe";

const Layout: NextPage = ({children}) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const navbar = document.getElementById("navbar")!;
        const topAd = document.getElementById("blockhost-banner")!;

        window.onscroll = () => {
            if (window.scrollY >= topAd.clientHeight) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }, []);

    return (
        <div data-theme={theme} className="min-h-screen min-w-screen flex flex-col bg-background text-text scroller">
            <ContactMe/>
            <TopAd/>
            <NavBar theme={theme} setTheme={setTheme}/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
