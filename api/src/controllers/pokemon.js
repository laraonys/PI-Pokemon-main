const axios = require('axios');
const { Pokemon, Type } = require('../db');


// GET que trae por query si hay algo, o todos si no hay nada
async function getPokemons(req, res) {
    // Almaceno el nombre que trae por query.
    const name = req.query.name
    try {
        if (!name) { // Si no hay name, traigo todo
            const all = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=96&offset=0');
            const pokeResult = all.data.results; // Almaceno el resultado
            const pokeURL = pokeResult.map((element) => { // Tomo las URL de cada uno de los pokes
                return element.url;
            }); 

            //Hago un axios.all porque es un array de URLs
            const pokes = await axios.all(pokeURL.map((element) => axios.get(element))); // Entro a cada URL y me traigo la info
            const pokesData = pokes.map((element) => {
                return element.data; // Almaceno solo la data que viene en esa info 
            });

            const mapPokesAPI = pokesData.map((element) => {
                // Traigo las imagenes y los tipos
                const image = element.sprites.other;
                const comp = 'official-artwork'
                const types = element.types.map((element) => element.type.name);
                
                // Devuelvo la info que necesito + img + tipos
                return {
                    id: element.id,
                    img: image[comp].front_default,
                    name: element.name,
                    type: types,
                    attack: element.stats[1].base_stat,
                    createdInDB: false,
                };
        
            });
            // Busco los pokes de mi DB y los traigo 
            const findPokesDB = await Pokemon.findAll({
                include: {
                    model: Type,
                    attributes: ['name'], 
                    through: {attributes: []},
                }
            });

            // Concateno los pokes de mi DB con los de la API
            const allPokes = mapPokesAPI.concat(findPokesDB);

            res.status(200).send(allPokes);

        } else {
            const nameLower = name.toLowerCase();

            const findPokeDB = await Pokemon.findOne({
                where: {
                    name: name,
                },
                include: {
                        model: Type,
                        attributes: ['name'], 
                        through: {attributes: []},
                    }
                });
            if (findPokeDB) {
    
                    res.status(200).send(findPokeDB);
    
            } else {
            // Si hay name en la query y no está en la DB, traigo la info de la URL con ese nombre.
            const namePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameLower}`);
            const element = namePokemon.data; // Almaceno solo la data.
            // Traigo la img + los types.
            const image = element.sprites.other;
            const comp = 'official-artwork'
            const types = element.types.map((element) => element.type.name);
            
            // Pongo la info que necesito en una variable para mandar al front
            const findPokeAPI = {
            
                id: element.id,
                img: image[comp].front_default,
                name: element.name,
                type: types,
               
            };
                res.status(200).send(findPokeAPI);

            };
            
        }
    } catch (error) { // Si hay query pero no coincide exacto 
        res.status(404).send({'error': 'El nombre no es correcto o no existe ningun Pokemon con ese nombre'})
    }
}

// GET que trae por ID

async function getPokemonById(req, res) {

    
    try {
        // Me traigo el id de params
        
        const id = req.params.id;

        // Busco el ID en la DB        
        if (id.length === 36) {
            
        const idInDB = await Pokemon.findOne({ 
            where: {
                id: id,
            },
            include: {
                model: Type,
                attributes: ['name'], 
                through: {attributes: []},
            }
    
        });
           
            res.status(200).send(idInDB);
            
        } else {
            // Traigo la info de la URL de ese id
            const idPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const element = idPokemon.data; // Almaceno solo la data

            // Traigo img + types

            const image = element.sprites.other;
            const comp = 'official-artwork';
            const types = element.types.map((element) => element.type.name);
        
            // Armo el elemento para mostrar 

            const pokebyId = {
                id: element.id,
                img: image[comp].front_default,
                name: element.name,
                type: types,
                hp: element.stats[0].base_stat,
                attack: element.stats[1].base_stat,
                defense: element.stats[2].base_stat,
                speed: element.stats[5].base_stat,
                height: element.height,
                weight: element.weight,
            };
        
            // Devuelvo el poke de ese ID
            res.status(200).send(pokebyId)
        }
    } catch (error) {
        res.status(404).send({'error': 'No existe el ID ingresado'});
    }
}

// POST para crear nuevos
async function postPokemon(req, res) {
    const { name, img, hp, attack, defense, speed, height, weight, types } = req.body;
    const nameLower = name.toLowerCase(); // Le saco a name la mayuscula si la tuviera
    const validName = nameLower.trim().length // Chequeo que no sea un string vacío

    try {
        if (validName) {
            // Chequeo que no exista el pokemon en mi DB
            
            const validateName = await Pokemon.findOne({
                where: {
                    name: nameLower,
                },
            });
            
            // Si no existe en la DB, lo creo
            if (!validateName) {
                
                const newPokemon = await Pokemon.create( 
                    {
                        name: nameLower,
                        img: img,
                        hp: hp,
                        attack: attack,
                        defense: defense,
                        speed: speed,
                        height: height,
                        weight: weight,
                        createdInDB: true,
        
                    });
                
                if (types) {
                    const idAux = await Type.findAll({
                        where: {
                            name: types,
                        },
                    });
                    const typesId = idAux.map((element) => element.id);
                    await newPokemon.addTypes(typesId);
                }
                res.status(200).send({ msg: 'Pokemon creado con éxito' });
            
            } else {
                res.status(404).send({ 'error': 'Ya existe un Pokemon con este nombre' });
            }
        } else {
            res.status(404).send({ 'error': 'Por favor, ingrese un nombre para su Pokemon' });
        }
    } catch (error) {
        res.send(error);
    }
}


module.exports = {
    getPokemons,
    getPokemonById,
    postPokemon,
}
    

