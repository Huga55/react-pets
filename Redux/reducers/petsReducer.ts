import { FavouritesType, PetsListType, PetType } from "../../API/API";

const SET_PETS_LIST = "SET_PETS_LIST";
const SET_ACTIVE_PET = "SET_ACTIVE_PET";
const SET_FOVOURITES = "SET_FOVOURITES";
const ASYNC_GET_LIST = "ASYNC_GET_LIST";
const ASYNC_GET_FAVOURITES = "ASYNC_GET_FAVOURITES";
const ASYNC_SEND_FAVOURITE = "ASYNC_SEND_FAVOURITE";

const initialState = {
    list: null as PetsListType | null,
    activePet: null as PetType | null,
    favourites: null as Array<FavouritesType> | null,
}

type InitialStateType = typeof initialState

const petsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case "SET_PETS_LIST":
            return {
                ...state,
                list: action.list
            }
        case "SET_ACTIVE_PET":
            return {
                ...state,
                activePet: action.pet
            }
        case "SET_FOVOURITES":
            return {
                ...state,
                favourites: action.data
            }
        default:
            return state;
    }
}

type ActionTypes = SetPetsListActionType | SetActivePetActionType | SetFavouritesActionType 

type SetPetsListActionType = {
    type: typeof SET_PETS_LIST
    list: PetsListType
}

export const setPetsListAction = (list: PetsListType): SetPetsListActionType => ({type: SET_PETS_LIST, list});

type SetActivePetActionType = {
    type: typeof SET_ACTIVE_PET
    pet: PetType
}

export const setActivePetAction = (pet: PetType): SetActivePetActionType => ({type: SET_ACTIVE_PET, pet});

type SetFavouritesActionType = {
    type: typeof SET_FOVOURITES
    data: Array<FavouritesType>
}

export const setFavouritesAction = (data: Array<FavouritesType>): SetFavouritesActionType => ({type: SET_FOVOURITES, data});

type AsyncGetFavouritesActionType = {
    type: typeof ASYNC_GET_FAVOURITES
}

export const asyncGetFavouritesAction = (): AsyncGetFavouritesActionType => ({type: ASYNC_GET_FAVOURITES});

type AsyncGetListAction = {
    type: typeof ASYNC_GET_LIST
}

export const asyncGetListAction = (): AsyncGetListAction => ({type: ASYNC_GET_LIST});

export type AsyncSendFavouriteActionType = {
    type: typeof ASYNC_SEND_FAVOURITE
    image_id: string
}

export const asyncSendFavouriteAction = (image_id: string): AsyncSendFavouriteActionType => ({type: ASYNC_SEND_FAVOURITE, image_id});

export default petsReducer;