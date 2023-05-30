import {DispatchTypes, HIDE_LOADER, SHOW_LOADER} from "./types";

export interface AppState {
    isLoading: boolean
}

export const initialState: AppState = {
    isLoading: false
}
export const loaderReducer = (state: AppState = initialState, action: DispatchTypes) => {
    switch (action.type) {
        case HIDE_LOADER:
            return { isLoading: false}
        case SHOW_LOADER:
            return { isLoading: true}
        default:
            return state
    }
}