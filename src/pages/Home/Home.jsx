import React from "react";
import './Home.css'
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";

function Home() {
    return (
        <div>
            <Navbar />
            <AboutMe/>
        </div>
    )
}

export default Home;
