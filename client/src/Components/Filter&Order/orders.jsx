import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanOrder, orderState } from "../../Redux/actions";



export default function Order(){
    const selectPokemons = useSelector((state)=> state.pokemons);
    const auxPokemons = selectPokemons;
    const dispatch = useDispatch();
    
    const handleOrder = (event) => {
        
        switch (event?.target.value){
            case "asc":
                auxPokemons.sort(function(a,b){
                    if (a.name > b.name) return 1;
                    if ( b.name > a.name) return -1;    
                    return 0
                })
                
                return dispatch(orderState(auxPokemons))
            case "des":
                auxPokemons.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                })     
                            
                return dispatch(orderState(auxPokemons))
            case "mintomay":
                auxPokemons.sort(function (a, b) {
                    if (a.attack > b.attack) return 1;
                    if (b.attack > a.attack) return -1;
                    return 0;
                    })
                    
                return dispatch(orderState(auxPokemons))   
            case "maytomin":
                auxPokemons.sort(function (a, b) {
                    if (a.attack > b.attack) return -1;
                    if (b.attack > a.attack) return 1;
                    return 0;
                  });
                
                return dispatch(orderState(auxPokemons))
                
            
            default:
                dispatch(cleanOrder());
                return
        };
    };


    return(
    <div>
    <div>
        <label >Order by: </label>
        <select onChange={handleOrder}> 
            <option value="all"></option>
            <option value="asc">Alphabetic(A-Z)</option>
            <option value="des">Alphabetic(Z-A)</option>
            <option value="mintomay">Attack (Minor to Mayor)</option>
            <option value="maytomin">Attack (Mayor to Minor)</option>
        </select>
    </div>              
    </div>
    )
    };