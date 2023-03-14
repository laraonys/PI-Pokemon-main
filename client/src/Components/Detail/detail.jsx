import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getpokemonsById, cleanDetail } from "../../Redux/actions";
import { Container, Stats, ButtonHom, Background, Img, Name, BasicInfo, AllS } from './styledDetail'
import img from '../resources/pokebola.png'

export default function PokeDetail() {
    
    const dispatch = useDispatch();
    const { id } = useParams(); // Destructuro el id de los params para poder usarlo.

    useEffect(() => {
        dispatch(getpokemonsById(id)); // dispatch que trae el poke de ese ID

        return dispatch(cleanDetail()); // limpia el estado de detail
    },[dispatch, id]) // se ejecuta CADA VEZ que se monta o modifica el ID
    
    const pokemons = useSelector((state) => state.detail) //Me traigo el estado global
    
    const aux = [];
    pokemons.createdInDB ? pokemons.types?.map((el) => aux.push(el.name)) : pokemons.type?.map((el) => aux.push(el));
    
    return ( // devuelvo el detail
    <Background>

            <Container>
                <BasicInfo>
                    <Img src={pokemons.img? pokemons.img: img} alt='imagen' />
                    <Name >{pokemons.name}</Name>
                    {aux?.length ? <div>Types: {aux.join(', ')}</div> : null}
                </BasicInfo>
                
                <Stats>
                    <AllS> All Stats:</AllS>
                    <div>
                        <span>Hp: </span>
                        <span>{pokemons.hp}</span>
                    </div>
                    <div>
                        <span>Speed: </span>
                        <span>{pokemons.speed}</span>
                    </div>
                    <div>
                        <span>Defense: </span>
                        <span>{pokemons.defense}</span>
                    </div>
                    <div>
                        <span>Attack: </span>
                        <span>{pokemons.attack}</span>
                    </div>
                    <div>
                        <span>Height: </span>
                        <span>{pokemons.height}</span>
                    </div>
                    <div>
                        <span>Weight: </span>
                        <span>{pokemons.weight}</span>
                    </div>
                </Stats>
            </Container>
                    <Link exact to='/poke/home'>
                        <ButtonHom>Go back home</ButtonHom>
                    </Link>
        </Background>
    );
};