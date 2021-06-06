const SET_IS_LOADING = "SET_IS_AJAX";
const CLEAR_IS_LOADING = "CLEAR_IS_AJAX";
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";
const CLEAR_GLOBAL_ERROR = "CLEAR_GLOBAL_ERROR";

const initialState = {
    isLoading: false,
    error: null as string | null,
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case "SET_IS_AJAX": 
            return {
                ...state,
                isLoading: true
            }
        case "CLEAR_IS_AJAX":
            return {
                ...state,
                isLoading: false,
            }
        case "SET_GLOBAL_ERROR":
            return {
                ...state,
                error: action.error,
            }
        case "CLEAR_GLOBAL_ERROR":
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

type ActionTypes = SetIsLoadingActionType | ClearIsLoadingActionType | SetGobalErrorActionType | ClearGlobalErrorActionType

type SetIsLoadingActionType = {
    type: typeof SET_IS_LOADING
}

export const setIsLoadingAction = (): SetIsLoadingActionType => ({type: SET_IS_LOADING});

type ClearIsLoadingActionType = {
    type: typeof CLEAR_IS_LOADING
}

export const clearIsLoadingAction = (): ClearIsLoadingActionType => ({type: CLEAR_IS_LOADING});

type SetGobalErrorActionType = {
    type: typeof SET_GLOBAL_ERROR
    error: string
}

export const setGlobalErrorAction = (error: string): SetGobalErrorActionType => ({type: SET_GLOBAL_ERROR, error});

type ClearGlobalErrorActionType = {
    type: typeof CLEAR_GLOBAL_ERROR
}

export const clearGlobalErrorAction = (): ClearGlobalErrorActionType => ({type: CLEAR_GLOBAL_ERROR});

export default appReducer;