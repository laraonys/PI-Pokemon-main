const axios = require('axios')
const { Type } = require('../db');

async function dbLoad(req, res) { 
    // Traigo los tipos de la pokeapi
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/type');
    const apiInfo = await apiUrl.data.results // Me quedo solo los results de la data
    
    // Mapeo la data y me quedo solo con los nombres
    const data = apiInfo.map((element) => {
        return {
            name: element.name,
        }
    });

    // Se fija si el tipo ya existe y sino lo crea en la DB
    data.forEach(async (element) => {
        await Type.findOrCreate({
            where: {
                name: element.name
            }
        });
    });
}

async function getType(req, res) {
    try {
        
        // Me devuelve todos los Types siempre que encuentre alguno
        
        const types = await Type.findAll();
        res.status(200).send(types);
    } catch (error) {
        
        // Devuelve error si no los encuentra

        res.status(404).send(error);
    } 
}

module.exports = {
    dbLoad,
    getType,
};