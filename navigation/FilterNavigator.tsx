import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FilterNavigatorStackParamList} from "./types";
import {FiltersScreen} from "../screens/FiltersScreen";


const Stack = createNativeStackNavigator<FilterNavigatorStackParamList>();

export const FilterNavigator = () => {
    return <Stack.Navigator screenOptions={{
        headerTitleStyle: {
            fontFamily: "open-sans-bold"
        }
    }}>
        <Stack.Screen name={"Filters"} component={FiltersScreen}/>
    </Stack.Navigator>
}


