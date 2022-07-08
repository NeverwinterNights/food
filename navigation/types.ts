import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {FavoritesNavigator} from "./FavoritesNavigator";
import {DrawerNavigator} from "./DrawerNavigator";
import {FiltersScreen} from "../screens/FiltersScreen";


export type DrawerNavigatorParamList = {
    // MealsFav: NavigatorScreenParams<MealsTabNavigatorParamList>;
    MealsFav: NavigatorScreenParams<MealsNavigatorStackParamList>,
    FiltersScreen: NavigatorScreenParams<FilterNavigatorStackParamList>,
}


export type MealsTabNavigatorParamList = {
    Meals: NavigatorScreenParams<MealsNavigatorStackParamList>;
    FavoritesNavigator: NavigatorScreenParams<FavoritesNavigatorStackParamList>;
}


export type MealsNavigatorStackParamList = {
    CategoriesScreen: undefined
    CategoryMealsScreen: { categoryID: string }
    MealDetailScreen: { mealID: string }
}

export type FavoritesNavigatorStackParamList = {
    FavoritesScreen: undefined
    MealDetailScreen: { mealID: string }

}


export type FilterNavigatorStackParamList = {
    Filters: undefined
}


export const useAppNavigation = () => useNavigation<NavigationTabType>()


export type DrawerScreenType = NavigationProp<DrawerNavigatorParamList>


export type CategoryMealsPropsType = NativeStackScreenProps<MealsNavigatorStackParamList, 'CategoryMealsScreen'>
export type MealDetailPropsType = NativeStackScreenProps<MealsNavigatorStackParamList, 'MealDetailScreen'>


export type NavigationCategoriesScreenType = NavigationProp<MealsNavigatorStackParamList>

export type NavigationTabType = NavigationProp<MealsTabNavigatorParamList>