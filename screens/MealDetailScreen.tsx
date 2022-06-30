import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";
import {CustomButton} from "../components/CustomButton";
import {MealDetailPropsType, NavigationCategoriesScreenType} from "../navigation/types";
import {MEALS} from "../data/dummy-data";

import {HeaderButton, HeaderButtons, HiddenItem, Item, OverflowMenu} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import {Ionicons} from "@expo/vector-icons";
import colors from "../config/colors";




const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()

export const MealDetailScreen = ({route}: MealDetailPropsType) => {
    const {mealID} = route.params
    const navigation = useAppNavigation()

    const currentClickedMeal = MEALS.find((meal) => meal.id === mealID)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: currentClickedMeal && currentClickedMeal.title,
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: colors.primaryColor},
            headerTintColor: "white",
            // headerRight: () => (
            //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            //         <Item title={"Favorite"} iconName={"ios-star"} onPress={() => console.log("ggg")}/>
            //        {/*<CustomButton children={""}/>*/}
            //        {/* <Item title={"Favorite"} iconName={"ios-star"} onPress={() => console.log("ggg")}/>*/}
            //        {/* <CustomHeaderButton/>*/}
            //     </HeaderButtons>
            //
            // ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite" iconName="ios-star" onPress={() => alert('search')} />
                </HeaderButtons>
            ),


        });
    }, [navigation, currentClickedMeal]);


    return (
        <View style={styles.container}>
            <AppText>{currentClickedMeal && currentClickedMeal.title}</AppText>
            <AppText>{mealID}</AppText>
            <CustomButton children={"Jump to CategoriesScreen"} onPress={() => {
                navigation.navigate("CategoriesScreen")
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
