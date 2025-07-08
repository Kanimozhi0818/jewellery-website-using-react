import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
    return ( <
        div className = "home"
        style = {
            { backgroundImage: `url(${BannerImage})` } } >
        <
        div className = "headerContainer" >
        <
        h1 > Veloura Jewels < /h1> <
        p > "Elegance in Every Element" < /p> <
        Link to = "/menu" >
        <
        button > VISIT NOW < /button> <
        /Link> <
        /div> <
        /div>
    );
}

export default Home;