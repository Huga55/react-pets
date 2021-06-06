import React from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { View, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { RootStackParamList } from "./../navigation/Navigation";
import AppTitle from "./../UI/AppTitle";
import AppText from "./../UI/AppText";
import AppButton from "./../UI/AppButton";
import Theme from "./../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { asyncSendFavouriteAction, setActivePetAction } from "../../Redux/reducers/petsReducer";
import { clearIsLoadingAction, setGlobalErrorAction, setIsLoadingAction } from "../../Redux/reducers/appReducer";

type PropsType = {}

type PropsNavigationType = StackScreenProps<RootStackParamList, "Info">;

const InfoScreen: React.FC<PropsType & PropsNavigationType> = (props) => {
    const { navigation } = props;
    const { activePet, favourites, list } = useSelector((state: AppStateType) => state.pets);
    const dispatch = useDispatch();

    if(!activePet) return <View></View>;

    const addFavourite = () => {
        if(activePet.image && activePet.image.id && favourites) {
            const isExist = !!favourites.find(f => f.image_id === activePet.image.id);
            if(isExist) {
                dispatch(setGlobalErrorAction("This image is your favourite already"));
            }else {
                dispatch(asyncSendFavouriteAction(activePet.image.id));
            }
        }else {
            dispatch(setGlobalErrorAction("This article has not got any image"));
        }
    }

    const getOtherPet = async () => {
        if(!list || list.length === 0) return dispatch(setGlobalErrorAction("Pet's list has any problem"));
        const count = list.length;
        const randomIndex = Math.floor(Math.random() * count - 1);
        await dispatch(setActivePetAction(list[randomIndex]));
    }

    return(
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.back} activeOpacity={0.5} onPress={navigation.goBack}>
                <Image source={require("./../../assets/images/Back.png")} />
            </TouchableOpacity>
            <ScrollView style={styles.scrollBlock}>
                <View style={styles.imageWrapper}>
                    {
                        activePet.image && activePet.image.url? 
                        <Image source={{ uri: activePet.image.url }} style={styles.image} />
                        :
                        <Image source={require("./../../assets/images/dog.png")} style={styles.image} />
                    }
                </View>
                <AppTitle style={styles.title}>
                    {activePet.name}
                </AppTitle>
                <AppText style={styles.text}>
                    {activePet.description}
                </AppText>
                <View style={styles.buttons}>
                    <AppButton style={styles.buttonOther} onPress={getOtherPet}>
                        Другое фото
                    </AppButton>
                    <AppButton style={styles.buttonAdd} onPress={() => addFavourite()}>
                        Добавить в избранное
                    </AppButton>
                </View>
            </ScrollView>
        </View>
    );
}

const widthContainer = Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 56,
        alignItems: "center",
    },
    back: {
        alignSelf: "flex-start",
    },
    scrollBlock: {
       width: widthContainer,
    },
    imageWrapper: {
        width: "100%",
        height: widthContainer,
        marginBottom: 43,
        backgroundColor: Theme.bgCart,
        borderRadius: 16
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    title: {
        marginBottom: 31,
    },
    text: {
        maxWidth: 303,
        marginBottom: 46,
    },
    buttons: {
        width: "100%",
        marginBottom: 100,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonOther: {
        width: "40%",
    },
    buttonAdd: {
        width: "57%",
    }
});

export default InfoScreen;