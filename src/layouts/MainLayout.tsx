import React, { useEffect } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearGlobalErrorAction } from "../../Redux/reducers/appReducer";
import { AppStateType } from "../../Redux/store";
import Navigation from "../navigation/Navigation";
import Loader from "../utils/Loader";

const MainLayout = () => {
    const { isLoading, error } = useSelector((state: AppStateType) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if(error) {
            Alert.alert(
                "Warning!",
                error,
                [
                  {
                    text: "OK",
                    onPress: () => dispatch(clearGlobalErrorAction()),
                    style: "default"
                  },
                ]
              );
        }
    }, [error]);

    return(
        <>
            <Navigation />
            {isLoading? <Loader /> : null}
        </>
    );
}

export default MainLayout;