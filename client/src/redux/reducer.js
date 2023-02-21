import {
    GET_COUNTRIES,
    GET_COUNTRIES_NAME,
    GET_ACTIVITIES,
    GET_COUNTRY_ID,
    GET_POPULATION,
    FILTER_CONTINENT,
    FILTER_ACTIVITIES,
    FILTER_POPULATION,
} from "./actions";



const initialState = {
    allCountries: [],
    countries: [],
    activities: [],
    population: [],
    detail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
            case GET_COUNTRIES_NAME:
                return {
                    ...state,
                    countries: action.payload,
                }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case GET_POPULATION:
            return {
                ...state,
                population: action.payload,
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                detail: action.payload,
            };
        case FILTER_CONTINENT:
            const allCountries = state.allCountries;
            const filterByContinent = action.payload === 'All' ? allCountries : allCountries.filter(elem => elem.continent === action.payload);
            return {
                ...state,
                countries: filterByContinent,
            };
        case FILTER_ACTIVITIES:

            //[{pais[{travel},{travel}]},{pais[{travel},{travel}]}] =>'travelName'
            //tengo que filtrar los paises que tengan la actividad con el mismo nombre que ingresa (travelName)
            const allCountries2 = state.allCountries;
            const existe = (travels, travelName) => {
                const hay = travels.filter(elem => elem.name === travelName);
                let ret = false;

                if (hay.length !== 0) {
                    ret = true;
                }

                return ret;
            }
            const filterCountriesTravel = action.payload === 'All' ? allCountries2 : allCountries2.filter(elem => existe(elem.travels, action.payload) === true);

            return {
                ...state,
                countries: filterCountriesTravel,
            }
        case FILTER_POPULATION:
            const allCountries3 = state.allCountries;
            const filterByPopulation = action.payload === 'All' ? allCountries3 : allCountries3.filter(elem => elem.population === Number(action.payload));
           
            return {
                ...state,
                countries: filterByPopulation,
            }

        default:
            return { ...state };
    }
}

export default rootReducer;