import React from "react";
import { Image } from "react-native";

type PropsType = {
    focused: boolean
}

const MainTabButton: React.FC<PropsType> = (props) => {
    const { focused } = props;
    
    return focused? <Image source={require("./../../../assets/images/mainActive.png")}/> :
    <Image source={require("./../../../assets/images/main.png")}/>
}

export default MainTabButton;