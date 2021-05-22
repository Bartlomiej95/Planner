import Rates from "../../interfaces/Rates/Rates";
import RatesConst from "./constants";


interface ActionFetchAllRates {
    type: RatesConst.FETCH_ALL_RATES,
    payload: {
        rates: Array<Rates>,
    }
}

interface ActionEditRate {
    type: RatesConst.EDIT_RATE,
    payload: {
        id: string,
        value: number,
        type?: string,
    }
}

type ActionsRates = ActionFetchAllRates | ActionEditRate;

export default ActionsRates;