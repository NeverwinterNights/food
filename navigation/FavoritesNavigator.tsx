import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {FavoritesNavigatorStackParamList} from "./types";


const Stack = createNativeStackNavigator<FavoritesNavigatorStackParamList>();

export const FavoritesNavigator = () => {
    return <Stack.Navigator screenOptions={{
        headerTitleStyle: {
            fontFamily: "open-sans-bold"
        }
    }}>
        <Stack.Screen name={"FavoritesScreen"} component={FavoritesScreen}/>
        <Stack.Screen name={"MealDetailScreen"} component={MealDetailScreen}/>
    </Stack.Navigator>
}


