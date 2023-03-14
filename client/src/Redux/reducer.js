import { GET_TYPES, GET_POKEMONS, ERROR, POST_POKEMONS, GET_POKEMONSBYID, CLEAN_DETAIL, GET_SEARCH, FILTER_STATE, CLEAN_FILTER, CLEAN_STATE, CLEAN_SEARCH, ORDER_STATE, CLEAN_ORDER } from "./actions"

const initialState = {
    pokemons: [],
    search: false,
    filter: false,
    order: false,
    detail: [],
    types: [],
    success: {},
    error: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_SEARCH:
            return {
                ...state,
                pokemons: action.payload,
                search: true,
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            }
        case POST_POKEMONS:
            return {
                ...state,
                success: action.payload,
                pokemons: [...state.pokemons, action.payload],
            }
        case GET_POKEMONSBYID:
            return {
                ...state,
                detail: action.payload,
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        
        case CLEAN_FILTER:
            return {
                ...state,
                detail: action.payload,
            };
        
        case CLEAN_STATE:
            return {
                ...state,
                pokemons: action.payload,
                success: action.payload,
                error: action.payload,
                filter: action.payload,
                detail: action.payload,
                search: action.payload,
                order: action.payload,
            };
        
        case FILTER_STATE: 
            return {
                ...state,
                pokemons: action.payload,
                filter: true,
            }
        
        case ORDER_STATE:
            return {
                ...state,
                recipes: action.payload,
                order: true,
            }
        
        case CLEAN_ORDER:
                return {
                  ...state,
                  order: action.payload,
            }
        
        case CLEAN_SEARCH: 
            return {
                ...state,
                search: action.payload,
            }
        
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return { ...state };
    }
}

export default rootReducer;