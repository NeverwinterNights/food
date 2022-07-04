import {createDrawerNavigator} from '@react-navigation/drawer';
import React from "react";
import {MealsTabNavigator} from "./MealsTabNavigator";
import {FiltersScreen} from "../screens/FiltersScreen";
import {DrawerNavigatorParamList} from "./types";
import {FilterNavigator} from "./FilterNavigator";
import colors from "../config/colors";


const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();


export const DrawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerActiveTintColor:colors.accentColor,
        drawerLabelStyle: {
            fontFamily:"open-sans-bold"
        }
    }}>
        <Drawer.Screen  options={{drawerLabel:"Meals"}} name={"MealsFav"} component={MealsTabNavigator}/>
        <Drawer.Screen options={{drawerLabel:"Filters"}} name={"FiltersScreen"} component={FilterNavigator}/>
    </Drawer.Navigator>
}

