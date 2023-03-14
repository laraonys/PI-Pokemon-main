import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, filterState, cleanState } from "../../Redux/actions";

export default function Filters() {
    
    const dispatch = useDispatch();
    const selectTypes = useSelector((state) => state.types);
    const selectPokes = useSelector((state) => state.pokemons);
    const selectFilter = useSelector((state) => state.filter);
    const auxPokes = selectPokes;
    let filteredPokes = [];

    useEffect(()=>{
        if (filteredPokes.length) dispatch(cleanState())
    }, [dispatch, filteredPokes.length])
    
    useEffect(() => {
        if (selectTypes.length === 0) dispatch(getTypes())

    }, [dispatch, selectTypes.length, selectFilter])

    const handleCreated = (event) => {
        let aux = [];
        if (event.target.value === 'us') {
            aux = selectPokes.filter((poke) => poke.createdInDB);
        } else if (event.target.value === 'api') {
            aux = selectPokes.filter((poke) => !poke.createdInDB);
        }
        if (aux.length > 0) {
            dispatch(filterState(aux))
        } else {
           alert ("Couldn't find any Pokemon created there")
           dispatch(cleanState());
        }
    }


    const handleTypes = (event) => {

        filteredPokes = [];
        if (event?.target.value !== "All"){
           auxPokes.map((element) => {
              const aux = element;
              if (element.createdInDB) {
                 element.types?.map((element) => {
                    if (element.name === event.target.value) {
                        filteredPokes.push(aux);
                    }
                    return filteredPokes;
                 });
              } else if (!element.createdInDB) {
                 element.type?.map((element) => {
                    if (element === event.target.value) {
                        filteredPokes.push(aux);
                    }
                    return filteredPokes;
              
                 });
              };
              return filteredPokes;
           });

            if (filteredPokes.length) {
                dispatch(filterState(filteredPokes))
            } else {
                alert("We couldn't find any Pokemons asociated with that type")
            }
        }

       
    }
        

    return (
        <div>
            <span>Filter by type: </span>
            <select onChange={handleTypes}>
                <option key={21} value='all'> </option>
                {selectTypes.length ? selectTypes.map((type) => <option key={type.id} value={type.name}>{type.name}</option>) :null}
            </select>
            {!selectFilter ? <>
                <span>Filter by created: </span>
                <select onChange={handleCreated}>
                    <option key={0} value='all'> </option>
                    <option key={1} value='us'>DataBase</option>
                    <option key={2} value='api'>Pokedex API</option>
                </select>
                </>
            :null}
        </div>
    )
}