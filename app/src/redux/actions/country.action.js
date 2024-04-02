import axios from "axios"

export const GET_COUNTRY = "GET_COUNTRY"

export const getCountry = () => {
    return (dispatch) => {
        return axios.get('https://restcountries.com/v3.1/all').then((res => {
            dispatch({ type: GET_COUNTRY, payload: res.data })
        }))
    }
}