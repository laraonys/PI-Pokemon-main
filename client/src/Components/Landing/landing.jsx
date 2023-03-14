import React from "react";
import { Link } from "react-router-dom";
import { Background, Button } from "./styledLanding";



export default function Landing(props) {
    return (
        <Background>
            <h3>Welcome to the Pokedex</h3>
            <Link exact to='/poke/home'>
                <Button>Get Started!</Button>
            </Link>
        </Background>
    )
    
}
