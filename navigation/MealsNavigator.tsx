import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {CategoryMealsScreen} from "../screens/CategoryMealsScreen";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {MealsNavigatorStackParamList} from "./types";


const Stack = createNativeStackNavigator<MealsNavigatorStackParamList>();

export const MealsNavigator = () => {
    return <Stack.Navigator screenOptions={{
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            fontSize:18
        }
    }}>
        <Stack.Screen name={"CategoriesScreen"} component={CategoriesScreen}/>
        <Stack.Screen name={"CategoryMealsScreen"} component={CategoryMealsScreen}/>
        <Stack.Screen name={"MealDetailScreen"} component={MealDetailScreen}/>
    </Stack.Navigator>
}

