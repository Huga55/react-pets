import React from "react";
import { Image } from "react-native";

type PropsType = {
    focused: boolean
}

const FavouriteTabButton: React.FC<PropsType> = (props) => {
    const { focused } = props;

    return focused? <Image source={require("./../../../assets/images/favouriteActive.png")}/> : 
    <Image source={require("./../../../assets/images/favourite.png")}/>
    
}

export default FavouriteTabButton;