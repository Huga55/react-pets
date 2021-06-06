import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import Theme from "../theme/theme";
import AppText from "../UI/AppText";

const FavouriteScreen = () => {
    const { favourites } = useSelector((state: AppStateType) => state.pets);

    return(
        <ScrollView style={styles.container}>
            {
                favourites && favourites.length?
                favourites.map( (i, index) => {
                    return(
                        <View style={index + 1 == favourites.length? {...styles.block, ...styles.lastBlock} : {...styles.block}} key={String(index)}>
                            {/* <Image source={require("./../../assets/images/dog.png")} style={styles.img} /> */}
                            <Image source={{uri: i.image.url}} style={styles.img} />
                        </View>
                    );
                }) : <View style={styles.textWrapper}><AppText>Здесь пока пусто</AppText></View>
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingBottom: 100
    },
    container: {
        paddingTop: 61,
        flex: 1,
    },
    block: {
        width: 318,
        height: 287,
        backgroundColor: Theme.bgCart,
        borderRadius: 10,
        overflow: "hidden", 
        alignSelf: "center",
        marginBottom: 15,
    },
    lastBlock: {
        marginBottom: 80,
    },
    img: {
        height: "100%",
        resizeMode: "cover",
    },
    textWrapper: {
        alignItems: "center"
    }
});

export default FavouriteScreen;