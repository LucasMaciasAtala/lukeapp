import {
    ActionReducer,
    MetaReducer
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { environment } from 'src/environments/environment';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state: any, action: any) {
        console.log('Estado', state);
        console.log('Acción', action);
        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger, storeFreeze] : [];
