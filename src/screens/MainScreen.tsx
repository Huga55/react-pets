import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PetType } from "../../API/API";
import { asyncGetFavouritesAction, asyncGetListAction, setActivePetAction } from "../../Redux/reducers/petsReducer";
import { AppStateType } from "../../Redux/store";
import CartItem from "./../components/CartItem";

type PropsType = {
    navigation: any
}

const MainScreen: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const { list, favourites } = useSelector((state: AppStateType) => state.pets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetListAction());
        if(!favourites) {
            dispatch(asyncGetFavouritesAction());
        }
    }, []);

    const openInfo = (item: PetType) => {
        dispatch(setActivePetAction(item));
        navigation.navigate("Info");
    }

    return(
        <View style={styles.container}>
            {
                list?
                <FlatList 
                    data={list}
                    renderItem={({ item }) => <CartItem data={item} onPress={() => openInfo(item)}/>}
                    keyExtractor={item => item.name}
                /> : null
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 61,
        alignItems: "center"
    }
});

export default MainScreen;