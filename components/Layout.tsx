import {NextPage} from "next";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BackgroundParticles from "./BackgroundParticles";
import {useState} from "react";

const Layout: NextPage = ({children}) => {
    const [theme, setTheme] = useState("dark");

    return (
        <div data-theme={theme} className="min-h-screen min-w-screen flex flex-col bg-background text-text scroller">
            <BackgroundParticles/>
            <NavBar theme={theme} setTheme={setTheme}/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
