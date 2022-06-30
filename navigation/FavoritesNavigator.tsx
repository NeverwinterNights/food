import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {CategoryMealsScreen} from "../screens/CategoryMealsScreen";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {FavoritesNavigatorStackParamList} from "./types";
import colors from "../config/colors";


const Stack = createNativeStackNavigator<FavoritesNavigatorStackParamList>();

export const FavoritesNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen options={{
            headerTitle: "Your Favorites",
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: colors.primaryColor},
            headerTintColor: "white"
        }} name={"FavoritesScreen"} component={FavoritesScreen}/>
        <Stack.Screen name={"MealDetailScreen"} component={MealDetailScreen}/>
    </Stack.Navigator>
}


