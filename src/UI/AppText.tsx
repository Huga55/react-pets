import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

type PropsType = {
    style?: TextStyle
}

const AppText: React.FC<PropsType> = (props) => {
    const { style = {}, children } = props;

    return(
        <Text style={{...styles.text, ...style}}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
    }
});

export default AppText;