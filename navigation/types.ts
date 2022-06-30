import {NavigationProp, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {FavoritesNavigator} from "./FavoritesNavigator";



export type MealsNavigatorStackParamList = {
    CategoriesScreen: undefined
    CategoryMealsScreen: { categoryID: string }
    MealDetailScreen: { mealID: string }
}

export type FavoritesNavigatorStackParamList = {
    FavoritesScreen: undefined
    MealDetailScreen: { mealID: string }

}



export type MealsTabNavigatorParamList = {
    Meals: NavigatorScreenParams<MealsNavigatorStackParamList>;
    FavoritesNavigator: NavigatorScreenParams<FavoritesNavigatorStackParamList>;

}

export type CategoryMealsPropsType = NativeStackScreenProps<MealsNavigatorStackParamList, 'CategoryMealsScreen'>
export type MealDetailPropsType = NativeStackScreenProps<MealsNavigatorStackParamList, 'MealDetailScreen'>


export type NavigationCategoriesScreenType = NavigationProp<MealsNavigatorStackParamList>

export type NavigationTabType = NavigationProp<MealsTabNavigatorParamList>