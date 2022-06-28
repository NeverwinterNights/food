import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {CategoryMealsScreen} from "../screens/CategoryMealsScreen";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {MealsNavigatorStackParamList} from "./navigationTypes";
import {Colors} from "../constants/Colors";


const Stack = createNativeStackNavigator<MealsNavigatorStackParamList>();

export const MealsNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen options={{
            headerTitle: "Meal Categories",
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: Colors.primaryColor},
            headerTintColor: "white"
        }} name={"CategoriesScreen"} component={CategoriesScreen}/>
        <Stack.Screen name={"CategoryMealsScreen"} component={CategoryMealsScreen}/>
        <Stack.Screen name={"MealDetailScreen"} component={MealDetailScreen}/>
    </Stack.Navigator>
}

