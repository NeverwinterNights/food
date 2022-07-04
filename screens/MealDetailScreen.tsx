import React, {useEffect, useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";
import {MealDetailPropsType, NavigationCategoriesScreenType} from "../navigation/types";
import {MealType} from "../data/dummy-data";

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import colors from "../config/colors";
import {useAppDispatch, useAppSelector} from "../store/store";
import {addFavoritesAC} from "../store/slice";


const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()

export const MealDetailScreen = ({route}: MealDetailPropsType) => {
    const {mealID} = route.params
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    const availableMeal = useAppSelector(state => state.reducer.meals)

    const currentClickedMeal: MealType | undefined = availableMeal.find((meal) => meal.id === mealID)
    const currentFavoriteMeals = useAppSelector(state => state.reducer.favoriteMeals)
    const toggleFavoritesHandler = (id: string) => {
        dispatch(addFavoritesAC({id}))
    }

    let isFav: boolean
    useEffect(() => {
        isFav = currentFavoriteMeals.some((meal) => meal.id === mealID)
    }, [currentFavoriteMeals])



    useLayoutEffect(() => {
        navigation.setOptions({
            title: currentClickedMeal && currentClickedMeal.title,
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: colors.primaryColor},
            headerTintColor: "white",
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite"
                          iconName={isFav ? "ios-star" : "ios-star-outline"}
                          onPress={() => {
                              toggleFavoritesHandler(mealID)
                          }}/>
                </HeaderButtons>
            ),
        });
    }, [navigation, currentClickedMeal, currentFavoriteMeals]);


    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: currentClickedMeal && currentClickedMeal.imageUrl}}/>
            <View style={styles.details}>
                <AppText
                    style={{fontFamily: "open-sans"}}>{currentClickedMeal && currentClickedMeal.duration}m</AppText>
                <AppText
                    style={{fontFamily: "open-sans"}}>{currentClickedMeal && currentClickedMeal.complexity.toUpperCase()}</AppText>
                <AppText
                    style={{fontFamily: "open-sans"}}>{currentClickedMeal && currentClickedMeal.affordability.toUpperCase()}</AppText>
            </View>
            <AppText style={styles.title}>Ingredients</AppText>
            {currentClickedMeal && currentClickedMeal.ingredients.map((ingredient) =>
                <AppText style={styles.list} key={ingredient}>{ingredient}</AppText>
            )}
            <AppText style={styles.title}>Steps</AppText>
            {currentClickedMeal && currentClickedMeal.steps.map((step) =>
                <AppText style={styles.list} key={step}>{step}</AppText>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: 300,
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"

    },
    title: {
        textAlign: "center",
        fontFamily: "open-sans-bold",
        fontSize: 22
    },
    list: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },
});
