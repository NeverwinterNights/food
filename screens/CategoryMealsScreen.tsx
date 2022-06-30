import React, {useLayoutEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {CategoryMealsPropsType, NavigationCategoriesScreenType} from "../navigation/types";
import {CATEGORIES, CategoryType, MEALS} from "../data/dummy-data";
import colors from "../config/colors";
import {MealsList} from "../components/MealsList";

type CategoryMealsScreenPropsType = {}

const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()


export const CategoryMealsScreen = ({route}: CategoryMealsPropsType) => {
    const {categoryID} = route.params
    const navigation = useAppNavigation()

    const selectedCategory: CategoryType | undefined = CATEGORIES.find(cat => categoryID === cat.id)

    const currentMeal = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryID) >= 0)

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


    return (
        <MealsList currentMeal={currentMeal} onMealClickHandler={onMealClickHandler}/>
    );
};



