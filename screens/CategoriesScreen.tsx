import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {CATEGORIES, CategoryType} from "../data/dummy-data";
import {NavigationCategoriesScreenType} from "../navigation/types";

import {CategoryGridTile} from "../components/CategoryGridTile";
import colors from "../config/colors";

type CategoriesScreenPropsType = {}

const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()


export const CategoriesScreen = ({}: CategoriesScreenPropsType) => {

    const navigation = useAppNavigation()



    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CategoryGridTile color={item.color} title={item.title}
                                                      onSelect={() => navigation.navigate("CategoryMealsScreen", {categoryID: item.id})}/>}/>
    );
};



const styles = StyleSheet.create({});
