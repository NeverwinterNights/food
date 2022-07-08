import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {DrawerActions} from "@react-navigation/native";
import {CATEGORIES} from "../data/dummy-data";
import {useAppNavigation} from "../navigation/types";

import {CategoryGridTile} from "../components/CategoryGridTile";
import colors from "../config/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";

type CategoriesScreenPropsType = {}


export const CategoriesScreen = ({}: CategoriesScreenPropsType) => {
    const navigation = useAppNavigation()

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                title: "Meal Categories",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: colors.primaryColor},
                headerTintColor: "white",
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                       <Item title="Menu" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
                        {/*<Item title="Menu" iconName="ios-menu" onPress={() => navigation.openDrawer()}/>*/}
                    </HeaderButtons>
                ),
            });
    }, [navigation]);

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CategoryGridTile
                color={item.color}
                title={item.title}
                onSelect={() => navigation.navigate("Meals",{screen:"CategoryMealsScreen", params:{categoryID: item.id}})}/>}/>
    );
};
const styles = StyleSheet.create({});
