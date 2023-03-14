import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemons } from "../../Redux/actions";
import { getTypes } from "../../Redux/actions";
import {Background, ButtonSub, ButtonTypes, Title, NameMesssage, Messsage, Options, MediumTxt, AllStats, BasicInfo} from "./styledForm"


export default function Form() {
    
    const dispatch = useDispatch();
    const selecTypes = useSelector((state) => state.types);
    
    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);
    
    
    const [input, setInput] = useState({
        name:"",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types:[]
    })
    
    
    const handleInput = (event) => {
        event.preventDefault()
        
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        
    }
    
    const handleTypes = (event) => {
        event.preventDefault()
        if (!input.types.includes(event.target.value)) // Evita que entre dos veces el mismo type
        
        setInput({
            ...input,
            types: [...input.types, event.target.value]
        })

    }

    const handleClose = (element) => {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== element )
        });
    }
    
    const [errors, setErrors] = useState({});

    const validateInput = (input) => {
        const err = {}
        const regExp = new RegExp('^[0-9]*$');
        if (!input.name.length) err.name = "You must type a name for your Pokemon"
        if (input.hp < 0 || !regExp.test(input.hp)) err.hp = "Wrong hp must be +0 and only numbers are allowed";
        if (input.attack < 0 || !regExp.test(input.attack)) err.attack = "Wrong attack must be +0 and only numbers are allowed";
        if (input.defense < 0 || !regExp.test(input.defense)) err.defense = "Wrong defense must be +0 and only numbers are allowed";
        if (input.height < 0 || !regExp.test(input.height)) err.height = "Wrong height must be +0 and only numbers are allowed";
        if (input.weight < 0 || !regExp.test(input.weight)) err.weight = "Wrong weight must be +0 and only numbers are allowed";
        
        return err;
    }

    useEffect(() => {
        setErrors(validateInput(input))
    }, [input]);


    function handleSubmit(event) {
        event.preventDefault();

        if (Object.keys(errors).length) {
            return alert("You must type a name for your Pokemon and all stats must be +0 (only numbers allowed)")
        } else {
            dispatch(postPokemons(input));
            alert("Pokemon created successfully");
            setInput({
                name:"",
                img: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                types:[]
            })

        }
    }


    return (
        <Background>
            <Title>Create your own Pokemon</Title>
            <form onSubmit={handleSubmit}>
                <BasicInfo> <MediumTxt>Basic Info:</MediumTxt>
                <div>
                    <label htmlFor="img"> Image:</label>
                    <input type="url" name="img" placeholder="Image URL(Opcional)" alt="Pokemon image" onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" name="name" value={input.name} onChange={handleInput} />
                    <NameMesssage>{errors.name && errors.name}</NameMesssage>
                </div>
                <div>
                    <label htmlFor="types"> Select types: </label>
                    <select value={input.types} onChange={handleTypes}> 
                    if (selecTypes) {
                        selecTypes.map((type) => {
                            return (
                                <Options key={type.id} value={type.name}>{type.name}</Options>
                            )
                        })
                    };
                    </select>
                    </div>
                </BasicInfo>
                <AllStats><MediumTxt>Stats:</MediumTxt> 
                <Messsage>Only numbers allowed</Messsage>
                <div>
                    <label htmlFor="hp"> HP: </label>
                    <input type="text" name="hp" value={input.hp} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="attack"> Attack: </label>
                    <input type="text" name="attack" value={input.attack} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="defense"> Defense: </label>
                    <input type="text" name="defense" value={input.defense} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="speed"> Speed: </label>
                    <input type="text" name="speed" value={input.speed} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="height"> Height: </label>
                    <input type="text" name="height" value={input.height} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="Weight"> Weight: </label>
                    <input type="text" name="weight" value={input.weight} onChange={handleInput}/>
                </div>
                </AllStats>
                <hr />
                
                <ButtonSub type="submit">Create my Pokemon</ButtonSub>

            </form>
                <hr />
                {input.types.length?<MediumTxt>Types selected:</MediumTxt>:null}
                {input.types.map((element) => {
                    return(
                        <div key={element.id}>
                            <span className="typesSel">{element}  </span>
                            <ButtonTypes className="typesSel" onClick={() => handleClose(element)}> X</ButtonTypes>
                        </div>
                    )
                })}
        </Background>
    )
};