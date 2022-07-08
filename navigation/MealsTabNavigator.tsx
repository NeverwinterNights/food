import {useNavigation} from "@react-navigation/native";
import {MealsNavigator} from "./MealsNavigator";
import {NavigationTabType, useAppNavigation} from "./types";
import colors from "../config/colors";
import {Ionicons} from "@expo/vector-icons"
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FavoritesNavigator} from "./FavoritesNavigator";


const Tab = Platform.OS == "android" ? createMaterialBottomTabNavigator() : createBottomTabNavigator();


export const MealsTabNavigator = ({route}: any) => {
    const navigation = useAppNavigation()
    // const getNavigationOptions = () => {
    //     if (Platform.OS === 'ios') {
    //         return {
    //             headerTitleAlign: "center",
    //             headerShown: false,
    //             tabBarActiveTintColor: colors.accentColor,
    //         };
    //     }
    //     return {
    //         headerShown: false,
    //         tabBarActiveTintColor: colors.accentColor,
    //     };
    // };


    return (
        // <Tab.Navigator screenOptions={({route, navigation}) => {
        //     return {
        //         headerTitleAlign: "center",
        //         headerShown: false,
        //         tabBarActiveTintColor: colors.accentColor,
        //         tabBarIcon: ({focused}) => {
        //             let iconName
        //             if (route.name === "Meals") {
        //                 iconName = "ios-restaurant"
        //             }
        //             if (route.name === "FavoritesScreen") {
        //                 iconName = "ios-star"
        //             }
        //             return <Ionicons name={iconName as any} size={focused ? 25 : 22}
        //                              color={focused ? colors.accentColor : "black"} onPress={() => {
        //                 navigation.navigate(route.name)
        //             }}/>
        //         }
        //     }
        // }}>
        // <Tab.Navigator screenOptions={({route, navigation}) => {
        //     return {
        //         headerTitleAlign: "center",
        //         headerShown: false,
        //         tabBarActiveTintColor: colors.accentColor,
        //         tabBarIcon: ({focused}) => {
        //             let iconName
        //             if (route.name === "Meals") {
        //                 iconName = "ios-restaurant"
        //             }
        //             if (route.name === "FavoritesScreen") {
        //                 iconName = "ios-star"
        //             }
        //             return <Ionicons name={iconName as any} size={focused ? 25 : 22}
        //                              color={focused ? colors.accentColor : "black"} onPress={() => {
        //                 navigation.navigate(route.name)
        //             }}/>
        //         }
        //     }
        // }}>
        //     <Tab.Screen name={"Meals"} component={MealsNavigator}/>
        // <Tab.Screen name={"FavoritesScreen"} component={FavoritesScreen}/>
        //     <Tab.Navigator  {...getNavigationOptions()}>
        <Tab.Navigator
            shifting
            // activeColor="#e91e63"
            //  activeColor="#e91e63"
            // inactiveColor="#3e2465"

            barStyle={{backgroundColor: '#4d2ca3'}}
        >
            <Tab.Screen options={
                {
                    tabBarLabelStyle: {
                        fontFamily: "open-sans-bold"
                    },
                    tabBarColor: colors.primaryColor,
                    // tabBarColor: "#e91e63",
                    tabBarIcon: ({focused}: { focused: boolean }) => {
                        return <Ionicons name={"ios-restaurant"}
                                         size={focused ? 24 : 22}
                                         color={colors.white}
                                         onPress={() => {
                                             navigation.navigate(route.name)
                                         }}/>
                    }
                }
            } name={"Meals"} component={MealsNavigator}/>

            <Tab.Screen options={{
                tabBarLabelStyle: {
                    fontFamily: "open-sans-bold"
                },
                title: "Favorites!",
                tabBarColor: "#368dff",
                tabBarActiveBackgroundColor: colors.accentColor,
                tabBarIcon: ({focused}: { focused: boolean }) => {
                    return <Ionicons name={"ios-star"}
                                     size={focused ? 24 : 22}
                                     color={colors.white}
                                     onPress={() => {
                                         navigation.navigate(route.name)
                                     }}/>
                }
            }} name={"FavoritesNavigator"} component={FavoritesNavigator}/>
        </Tab.Navigator>
    )
}