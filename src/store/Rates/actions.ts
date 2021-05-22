import { Dispatch } from 'react';
import * as api from '../../api/index';
import ActionsRates from './actionsCreator';
import RatesConst from './constants';

export const fetchAllRates = () => async (dispatch: Dispatch<ActionsRates>) => {
    try {
        const { data } = await api.fetchData();
        const rates = data.rates;

        dispatch({ type: RatesConst.FETCH_ALL_RATES, payload: rates});
    } catch (error) {
        console.log(error);
    }
}

export const editRate = (id: string, value: number) => async (dispatch: Dispatch<ActionsRates>) => {
    try {
        const { data } = await api.editRate(id, value);

        dispatch({ type: RatesConst.EDIT_RATE, payload: { id, value }})
        
    } catch (error) {
        console.log(error);
    }
}