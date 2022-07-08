import React, {useLayoutEffect} from 'react';
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {NavigationTabType, useAppNavigation} from "../navigation/types";
import {MealsList} from "../components/MealsList";
import colors from "../config/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import {useAppSelector} from "../store/store";
import {View} from "react-native";
import {AppText} from "../components/AppText";

type FavoritesScreenPropsType = {}

export const FavoritesScreen = ({}: FavoritesScreenPropsType) => {

    const favMeal = useAppSelector(state => state.reducer.favoriteMeals)


    const navigation = useAppNavigation()


    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: "Your Favorites",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: colors.primaryColor},
                headerTintColor: "white",
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="Menu" iconName="ios-menu"
                              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
                    </HeaderButtons>
                ),
            });
    }, [navigation, favMeal]);

    const onMealClickHandler = (id: string) => {
        navigation.navigate("FavoritesNavigator", {screen: "MealDetailScreen", params: {mealID: id}})
    }

    if (favMeal.length == 0 || !favMeal) {
        return <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <AppText>No favorites meal selected</AppText>
        </View>
    }

    return (
        <MealsList onMealClickHandler={onMealClickHandler} currentMeal={favMeal}/>
    );
};

