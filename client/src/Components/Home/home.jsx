import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, cleanState, cleanOrder } from "../../Redux/actions";
import PagenotFound from "../PageNotFound/pagenotfound";
import Pokemons from '../Pokemons/pokemons';
import Loading from '../Loading/loading'
import { useState } from "react";
import Pagination from "../Pagination/pagination";




export default function Home() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const selecPokes = useSelector((state) => state.pokemons);
    const selecError = useSelector((state) => state.error);
    const selecSearch = useSelector((state) => state.search);
    const selecOrder = useSelector((state) => state.order);
    const pokemonsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const selecFilter = useSelector((state) => state.filter);
    const [currentPokemons, setCurrentPokemons] = useState([]);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const aux = selecPokes

    const handleClick = () => {
        history.push("/poke/home")
        dispatch(cleanState())
    }

    useEffect(() => {
        if (!selecPokes.length && !selecSearch) dispatch(getPokemons());
        if (selecOrder) dispatch(cleanOrder());
        setCurrentPokemons([...aux].slice(firstIndex, lastIndex));
        if (selecFilter && currentPage > (selecPokes.length / 12)) setCurrentPage(1);// Me devuelve a la pagina uno cuando hago un filter
        if(selecSearch) dispatch(cleanState())
    }, [dispatch, selecPokes.length, selecSearch, selecPokes, selecOrder, selecFilter, currentPage, firstIndex, lastIndex, aux]);


    useEffect(()=>{
        if (selecError.response){
          setTimeout(function(){
            dispatch(cleanState());  
        }, 4000);
        }
    })
    
    
    if (selecSearch) {
        return (
            <>
                <Pokemons key={selecPokes.id} pokemon={selecPokes} />
                <button onClick={handleClick}> Go Back </button>
            </>
        )
    } else if (currentPokemons?.length) {
        return (
            <>
                <Pagination pokemonsPerPage={pokemonsPerPage} allPokemons={selecPokes.length} paginate={paginate} currentPage={currentPage} />
                <div>{currentPokemons.map((poke) => (<Pokemons key={poke.id} pokemon={poke} />))}</div>
            </>
        );
    }
     else if (!selecError.length && !selecPokes.length) {
        return <Loading />
    } else {
        return <PagenotFound />
    }
    
};