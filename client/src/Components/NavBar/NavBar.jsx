import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link, Route } from "react-router-dom";
import SearchBar from "../SearchBar/searchbar";
import Filters from "../Filter&Order/filters";
import { cleanState } from "../../Redux/actions";
import Order from "../Filter&Order/orders";
import {Buttons} from './styledNavBar'

export default function Navbar() {
    const selectFilter = useSelector((state) => state.filter)
    const dispatch = useDispatch();

    function handleClick1(){
        dispatch(cleanState());
    };

    return (
        <>
            <>
                <li>
                    <span><Route exact path='/poke/home'><SearchBar /></Route></span>
                    <div>
                        <span><Route exact path='/poke/home'><Filters /></Route></span>
                        <span><Route exact path='/poke/home'><Order /></Route></span>
                    </div>
                    {selectFilter?<span><Route exact path="/poke/home"><button onClick={handleClick1}>Clean Filter</button></Route></span>:null}
                    <Link to='/poke/home'><Buttons>Home</Buttons> </Link>
                    <Link to='/poke/createnew'><Buttons>Create a Pokemon</Buttons> </Link>

                </li>
            </>
            <hr/>
        </>
    )
}