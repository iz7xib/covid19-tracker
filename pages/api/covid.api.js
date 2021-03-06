import axios from "axios";

export const covidGlobal = async () => {
    return await axios.get("https://covid19.mathdro.id/api")
        .then(response => response).catch(error => error);
}

export const covidIta = async () => {
    return await axios.get("https://covid19.mathdro.id/api/countries/IT")
        .then(response => response).catch(error => error);
}

export const covidDaily = async () => {
    return await axios.get("https://covid19.mathdro.id/api/daily")
        .then(response => response).catch(error => error);
}