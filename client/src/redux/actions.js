import axios from 'axios';


export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_POPULATION = 'GET_POPULATION';
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITIES = 'FILTER_ACTIVITIES';
export const FILTER_POPULATION = 'FILTER_POPULATION';


export const getCountries = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries");

        const countries = apiData.data;
        dispatch({
            type: GET_COUNTRIES,
            payload: countries,
        });
    }
}

export const getCountriesName = (name) => {

    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries?name=" + name);

        const country = apiData.data;
        dispatch({
            type: GET_COUNTRIES_NAME,
            payload: country,
        });
    }
}

export const getActivities = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/activities");

        const activities = apiData.data;
        dispatch({
            type: GET_ACTIVITIES,
            payload: activities,
        });
    }
}

export const getPopulation = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries/population");

        const population = apiData.data;
        dispatch({
            type: GET_POPULATION,
            payload: population,
        });
    }
}


export const getCountryId = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries/" + id);

        const country = apiData.data;
        return dispatch({
            type: GET_COUNTRY_ID,
            payload: country,
        })
    }
}

export const filterContinent = (payload) => {
    return {
        type: FILTER_CONTINENT,
        payload,
    }
}

export const filterActivities = (payload) => {
    return {
        type: FILTER_ACTIVITIES,
        payload,
    }
}

export const filterPopulation = (payload) => {
    return {
        type: FILTER_POPULATION,
        payload,
    }
}
