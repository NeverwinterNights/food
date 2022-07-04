import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MealItem} from "./MealItem";
import {MealType} from "../data/dummy-data";

type MealsListPropsType = {
    currentMeal: MealType[]
    onMealClickHandler: (id: string) => void
}

export const MealsList = ({currentMeal, onMealClickHandler}: MealsListPropsType) => {
    return (
        <View style={styles.container}>
            <FlatList data={currentMeal} style={{width: "100%"}} showsVerticalScrollIndicator={false}
                      keyExtractor={(item) => item.id} renderItem={({item}) =>
                <MealItem item={item} onMealSelect={() => onMealClickHandler(item.id)}/>
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,

    }
});
