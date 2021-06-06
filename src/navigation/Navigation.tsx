import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainTabButton from "./buttons/MainTabButton";
import FavouriteTabButton from "./buttons/FavouritesTabButton";
import MainScreen from "./../screens/MainScreen";
import InfoScreen from "./../screens/InfoScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import Theme from "./../theme/theme";


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Theme.bgMain,
    },
};

const tabStyle = {
    height: 105,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Theme.bgMain,
}

export type RootStackParamList = {
    Home: undefined;
    Info: undefined;
};

const RootStack = createStackNavigator();

export type RootTabParamList = {
    Main: undefined;
    Favourite: undefined;
};

const RootTab = createBottomTabNavigator();

const NavigationStack = () => {
    return(
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Home" component={MainScreen} />
            <RootStack.Screen name="Info" component={InfoScreen} />
        </RootStack.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <RootTab.Navigator tabBarOptions={{style: tabStyle}}>
                <RootTab.Screen 
                    name="Main" 
                    component={NavigationStack} 
                    options={{
                        tabBarIcon: ({ focused }) => <MainTabButton focused={focused}/>,
                        tabBarLabel: () => {return null},
                    }}
                />
                <RootTab.Screen 
                    name="Favourite" 
                    component={FavouriteScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => <FavouriteTabButton focused={focused}/>,
                        tabBarLabel: () => {return null},
                    }}
                />
            </RootTab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;