import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";
import {CustomButton} from "../components/CustomButton";
import {CategoryMealsPropsType, NavigationCategoriesScreenType} from "../navigation/types";
import {CATEGORIES, CategoryType} from "../data/dummy-data";
import {Colors} from "../constants/Colors";

type CategoryMealsScreenPropsType = {}

const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()


export const CategoryMealsScreen = ({route}: CategoryMealsPropsType) => {
    const {categoryID} = route.params
    const navigation = useAppNavigation()

    const selectedCategory: CategoryType | undefined = CATEGORIES.find(cat => categoryID === cat.id)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory && selectedCategory.title,
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: Colors.primaryColor},
            headerTintColor: "white"
        });
    }, [navigation, selectedCategory]);


    return (
        <View style={styles.container}>
            <AppText>The Category Meals Screen</AppText>
            <AppText>{selectedCategory && selectedCategory.title}</AppText>
            <CustomButton children={"Jump to MealDetailScreen"} onPress={() => {
                navigation.navigate("MealDetailScreen")
            }}/>
        </View>
    );
};


CategoryMealsScreen.navigationOptions = (navigationData: any) => {
    const navigation = useAppNavigation()
    console.log(navigation);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
