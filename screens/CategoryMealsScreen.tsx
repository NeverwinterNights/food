import React, {useLayoutEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {CategoryMealsPropsType, NavigationCategoriesScreenType} from "../navigation/types";
import {CATEGORIES, CategoryType} from "../data/dummy-data";
import colors from "../config/colors";
import {MealsList} from "../components/MealsList";
import {useAppSelector} from "../store/store";
import {View} from "react-native";
import {AppText} from "../components/AppText";

type CategoryMealsScreenPropsType = {}

const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()


export const CategoryMealsScreen = ({route}: CategoryMealsPropsType) => {

    const {categoryID} = route.params
    const navigation = useAppNavigation()

    const filteredMeal = useAppSelector(state => state.reducer.filteredMeals)


    const selectedCategory: CategoryType | undefined = CATEGORIES.find(cat => categoryID === cat.id)

    const currentMeal = filteredMeal.filter((meal) => meal.categoryIds.indexOf(categoryID) >= 0)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory && selectedCategory.title,
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: colors.primaryColor},
            headerTintColor: "white",

        });
    }, [navigation, selectedCategory]);

    const onMealClickHandler = (id: string) => {
        navigation.navigate("MealDetailScreen", {mealID: id})
    }

    console.log(filteredMeal);

    if (currentMeal.length === 0) {
        return <View style={{
            flex: 1, alignItems: "center",
            justifyContent: "center",
        }}>
            <AppText>No meals, check your filter</AppText>
        </View>
    }

    return (
        <MealsList currentMeal={currentMeal} onMealClickHandler={onMealClickHandler}/>
    );
};



