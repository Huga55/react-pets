import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

type PropsType = {
    height: number,
    style: any
}

const CartWrapper: React.FC<PropsType> = (props) => {
    const { height, style, children } = props;

    return(
        <TouchableOpacity style={{...styles.wrapper, ...style, height}}>
            <View style={{...styles.mainBg, ...styles.shadowFirst}}>
                <View style={{...styles.mainBg, ...styles.shadowSecond}}>
                    <View style={{...styles.mainBg, ...styles.shadowThird}}>
                        <View style={{...styles.mainBg, ...styles.shadowFourth}}>
                            {children}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "flex-end",
        position: "relative",
        borderRadius: 16,
    },
    mainBg: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
    },
    shadowFirst: {
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    },
    shadowSecond: {
        
    },
    shadowThird: {
        
    },
    shadowFourth: {
        
    },
});

export default CartWrapper;