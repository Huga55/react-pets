import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

type PropsType = {
    style?: TextStyle
}

const AppTitle: React.FC<PropsType> = (props) => {
    const { style = {}, children } = props;

    return(
        <Text style={{...styles.title, ...style}}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 20,
    }
});

export default AppTitle;