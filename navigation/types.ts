import {NavigationProp} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {CategoriesScreen} from "../screens/CategoriesScreen";
import {CategoryMealsScreen} from "../screens/CategoryMealsScreen";


export type MealsNavigatorStackParamList = {
    CategoriesScreen: undefined
    CategoryMealsScreen:{categoryID: string}
    MealDetailScreen: undefined
}



export type CategoryMealsPropsType = NativeStackScreenProps<MealsNavigatorStackParamList, 'CategoryMealsScreen'>

export type NavigationCategoriesScreenType = NavigationProp<MealsNavigatorStackParamList>