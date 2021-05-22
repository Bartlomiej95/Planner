import Rates from "../../interfaces/Rates/Rates";
import ActionsRates from "./actionsCreator";
import RatesConst from "./constants";


export default (rates: Array<Rates> = [], action: ActionsRates) => {
    switch(action.type){
        case RatesConst.FETCH_ALL_RATES:
            return action.payload;
        case RatesConst.EDIT_RATE:
            return [
                ...rates, 
            ].map(rate => {
                if(rate._id === action.payload.id){
                    rate.rate = action.payload.value;
                }
                return rate
            })
        default:
            return rates;
        }
}