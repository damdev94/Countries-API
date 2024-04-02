import { GET_COUNTRY } from "../actions/country.action"

const initialState = {}

export default function countryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY:
            return action.payload
        default:
            return state
    }
}