import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import Theme from "./../theme/theme";
import AppTitle from "./../UI/AppTitle";
import AppText from "./../UI/AppText";
import { PetType } from "../../API/API";

type PropsType = {
    data: PetType
    onPress: () => void
}

const CartItem: React.FC<PropsType> = (props) => {
    const { data, ...otherProps } = props;

    return(
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} {...otherProps}>
            {
                data.image && data.image.url? <Image source={{uri: data.image.url}} style={styles.image}/> 
                : 
                <Image source={require("./../../assets/images/dog.png")} style={styles.image}/>
            }
            <View style={styles.block}>
                <View style={styles.titleWrapper}>
                    <AppTitle>
                        {data.name}
                    </AppTitle>
                </View>
                <View style={styles.textWrapper}>
                    <AppText>
                        {data.description}
                    </AppText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: Dimensions.get('window').width - 50,
        minHeight: 130,
        marginBottom: 20,
        borderRadius: 16,
        backgroundColor: Theme.bgCart,
        flexDirection: "row",
    },
    block: {
        width: "100%",
        paddingVertical: 16,
        paddingRight: 12,
        marginLeft: 6,
        justifyContent: "space-between",
        flexShrink: 1
    },
    image: {
        width: 120,
        height: "100%",
        resizeMode: "center",
    },
    titleWrapper: {

    },
    textWrapper: {
        flexDirection: "row",
    },
});

export default CartItem;