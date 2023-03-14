import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONSBYID = "GET_POKEMONSBYID";
export const GET_TYPES = "GET_TYPES";
export const POST_POKEMONS = "POST_POKEMONS";
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const CLEAN_STATE = 'CLEAN_STATE';
export const ERROR = "ERROR";
export const GET_SEARCH = 'GET_SEARCH';
export const FILTER_STATE = 'FILTER_STATE';
export const CLEAN_FILTER = 'CLEAN_FILTER';
export const CLEAN_SEARCH = 'CLEAN_SEARCH';
export const ORDER_STATE = 'ORDER_STATE';
export const CLEAN_ORDER = 'CLEAN_ORDER';


export const getPokemons = (name) => {
    return async function (dispatch) {
        try {
            if (name) {
                const response = await axios.get(`http://localhost:3001/pokemon/${name}`)
            dispatch({
                type: 'GET_SEARCH',
                payload: response.data
            })
            } else {
                const response = await axios.get('http://localhost:3001/pokemon')
                dispatch({
                    type: 'GET_POKEMONS',
                    payload: response.data
                })
            }
            
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: 'we could´t get Pokemons List'
            })
        }
    };
}

export const getpokemonsById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemon/${id}`)
            const pokemon = response.data
            dispatch({
                type: 'GET_POKEMONSBYID',
                payload: pokemon
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: 'We could´t find any Pokemon associated with that type'
            })
        }
    };
}
    
export const getTypes = () => {
    return async function (dispatch) {
        try {
        const response = await axios.get('http://localhost:3001/type')
        dispatch({
            type: 'GET_TYPES',
            payload: response.data
        })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: 'We could´t get the types list'
            })
        }
        
    };
}

export const postPokemons = (pokemon) => {

    return async function (dispatch) {
      try {
        const response = await axios.post("http://localhost:3001/pokemon", pokemon);
        const pokemons = response.data;
        dispatch({
          type: POST_POKEMONS,
          payload: pokemons,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: "We weren´t able to create your Pokemon",
        });
      }
    };
};
  

export const cleanDetail = () => {
    return async function (dispatch) {
        dispatch({
            type: CLEAN_DETAIL,
            payload: []
        })
    }
};

export const filterState = (payload) => {
    return {
        type: FILTER_STATE, 
        payload,
    }
}


export const cleanState = () => {
    return async function (dispatch) {
      dispatch({
        type: CLEAN_STATE,
        payload: "",
      });
    };
};

export const cleanFilter = () => {
    return async function (dispatch) {
      dispatch({
        type: CLEAN_FILTER,
        payload: false,
      });
    };
};

export const cleanSearch = () => {
    return async function (dispatch) {
      dispatch({
        type: CLEAN_SEARCH,
        payload: false,
      });
    };
};

export const orderState = (filter) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_STATE,
            payload: filter,
        })
    }
};

export const cleanOrder = (clean) => {
    return async function (dispatch) {
        dispatch({
            type: CLEAN_ORDER,
            payload: clean,
        });
    };
};


  




  
