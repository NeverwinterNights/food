import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {NavigationTabType} from "../navigation/types";
import {MealsList} from "../components/MealsList";
import {MEALS} from "../data/dummy-data";

type FavoritesScreenPropsType = {}
const useAppNavigation = () => useNavigation<NavigationTabType>()
export const FavoritesScreen = ({}: FavoritesScreenPropsType) => {

    const favMeal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2")

    const navigation = useAppNavigation()

    const onMealClickHandler = (id: string) => {

         navigation.navigate("FavoritesNavigator", {screen: "MealDetailScreen", params:{mealID: id}})

    }


    return (
        <MealsList onMealClickHandler={onMealClickHandler} currentMeal={favMeal}/>
    );
};

const styles = StyleSheet.create({
    container: {}
});
