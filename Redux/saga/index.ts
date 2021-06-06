import { call, put, takeEvery } from "redux-saga/effects";
import { favouritesAPI, petsAPI } from "../../API/API";
import { clearIsLoadingAction, setGlobalErrorAction, setIsLoadingAction } from "../reducers/appReducer";
import { asyncGetFavouritesAction, AsyncSendFavouriteActionType, setFavouritesAction, setPetsListAction } from "../reducers/petsReducer";

function* petsWorker(): any {
    yield put(setIsLoadingAction());
    const response = yield call(petsAPI.getList);
    if(response.status === 200) {
        yield put(setPetsListAction(response.data));
    }else {
        yield put(setGlobalErrorAction("Error with getting pet's list"));
    }
    yield put(clearIsLoadingAction());
}

function* getFavourites(): any {
    yield put(setIsLoadingAction());
    const response = yield call(favouritesAPI.getAll);
    if(response.status === 200) {
        yield put(setFavouritesAction(response.data));
    }else {
        yield put(setGlobalErrorAction("Error with getting favourite list"));
    }
    yield put(clearIsLoadingAction());
}

function* sendFavourite(actionProps: AsyncSendFavouriteActionType): any {
    yield put(setIsLoadingAction());
    const response = yield call(() => favouritesAPI.addOne(actionProps.image_id));
    if(response.status === 200) {
        yield put(asyncGetFavouritesAction());
    }else {
        yield put(setGlobalErrorAction("Error with send favourite image"));
    }
    yield put(clearIsLoadingAction());
}

export function* petsWatcher() {
    yield takeEvery("ASYNC_GET_LIST", petsWorker);
    yield takeEvery("ASYNC_GET_FAVOURITES", getFavourites);
    yield takeEvery("ASYNC_SEND_FAVOURITE", sendFavourite);
}

