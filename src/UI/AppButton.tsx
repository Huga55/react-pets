import React from "react";
import { TouchableOpacity, StyleSheet, Text, ViewStyle } from "react-native";
import Theme from "./../theme/theme";

type PropsType = {
    style?: ViewStyle
    onPress?: () => void
}

const AppButton: React.FC<PropsType> = (props) => {
    const { style = {}, children, ...otherProps } = props;

    return(
        <TouchableOpacity activeOpacity={0.7} style={{...styles.button, ...style}} {...otherProps}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    text: {
        fontWeight: "800",
        fontSize: 14,
        lineHeight: 19,
        color: Theme.btnText
    }
});

export default AppButton;