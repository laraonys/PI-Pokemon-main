import React from "react";
import { Name, Card, ButtonDet, Image, Background } from "./styledPokemons";
import { useHistory } from "react-router-dom"; 
import img from '../resources/pokebola.png'

const Pokemons = ({ pokemon }) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/poke/detail/${pokemon.id}`);
    }

    const aux = [];
    let auxImg = ""; 

    pokemon?.createdInDB ? pokemon.types?.map((el) => aux.push(el.name)) : pokemon?.type.map((el) => aux.push(el));
    pokemon?.img ? auxImg = pokemon.img : auxImg = img;

    return (
        <Background>
            <Card>
            <span><Image src={auxImg} alt="" /></span>
            <Name>{pokemon?.name}</Name>
            <span>Types: </span>
            <span>{aux.join(", ")}</span>
            <ButtonDet onClick={handleClick}> Pokemon detail </ButtonDet>
            </Card>
        </Background>
    ) 
}

export default Pokemons
