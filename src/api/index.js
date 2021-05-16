import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/countries/India?yesterday=India&twoDaysAgo=India&strict=India&allowNull=India';

export const fetchData = async () =>{
    try {
        const { data : { cases, active, recovered, deaths } } = await axios.get(url);

        const modifiedData = {
            cases,
            active,
            recovered,
            deaths
        }
        return modifiedData;
        } catch (error) {
        
    }
}