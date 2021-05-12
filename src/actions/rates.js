import * as api from '../api/index';

export const fetchAllRates = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();
        const rates = data.rates;

        dispatch({ type: 'FETCH_ALL_RATES', payload: rates});
    } catch (error) {
        console.log(error);
    }
}

export const editRate = (id, value, type) => async (dispatch) => {
    try {
        const { data } = await api.editRate(id, value, type);

        dispatch({ type: 'EDIT_RATE', payload: { id, value }})
        
    } catch (error) {
        console.log(error);
    }
}