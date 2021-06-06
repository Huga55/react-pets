import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => {
    return(
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    }
});

export default Loader;