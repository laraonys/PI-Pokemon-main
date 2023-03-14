import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../Redux/actions';
import { Input, Button } from './styledSerachBar'

export default function SearchBar({onSearch}) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    
    const handleSubmit = (event) => {
      event.preventDefault();
        dispatch(getPokemons(search));
        setSearch("");
    }

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }

  return (
    <div>
      <Input type='text' name='search' id='search' value={search} placeholder='Pokemon name' onChange={changeHandler}/>
      <Button onClick={handleSubmit}>
        Search
      </Button>
    </div>
  )
};

