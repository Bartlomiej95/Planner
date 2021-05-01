import * as api from '../api/index';

export const fetchAllRates = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();
        const rates = data.rates;
        console.log(rates);

        dispatch({ type: 'FETCH_ALL_RATES', payload: rates});
    } catch (error) {
        console.log(error);
    }
}

export const editRate = (id, value) => {
    try {
        return {
            type: 'EDIT_RATE',
            payload: { id, value}
        }
    } catch (error) {
        console.log(error);
    }
}

// export const editRate = (id, value) => async (dispatch) => {
//     try {
//         const { data } = await api.editRate(id, value);
//         console.log(data);

//         dispatch({ type: 'EDIT_RATE', payload: { id, value }})
        
//     } catch (error) {
//         console.log(error);
//     }
// }