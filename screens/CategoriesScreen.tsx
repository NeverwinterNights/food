import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";
import {CATEGORIES} from "../data/dummy-data";
import {NavigationCategoriesScreenType} from "../navigation/types";
import {Colors} from "../constants/Colors";

type CategoriesScreenPropsType = {}

const useAppNavigation = () => useNavigation<NavigationCategoriesScreenType>()


export const CategoriesScreen = ({}: CategoriesScreenPropsType) => {

    const navigation = useAppNavigation()

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
                <TouchableOpacity style={styles.gridItem}
                                  onPress={() => navigation.navigate("CategoryMealsScreen", {categoryID: item.id})}>
                    <AppText>{item.title}
                    </AppText>
                </TouchableOpacity>
            }/>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
    headerStyle: {backgroundColor: Colors.primaryColor},
    headerTintColor: "white"
}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});
