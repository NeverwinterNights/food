import React, {useCallback, useLayoutEffect, useState} from 'react';
import {LogBox, StyleSheet, Switch, View} from 'react-native';
import {AppText} from "../components/AppText";
import {DrawerActions, useNavigation, useRoute} from "@react-navigation/native";
import colors from "../config/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";
import {useAppDispatch} from "../store/store";
import {filtersSettings, setFiltersAC} from "../store/slice";
import { useAppNavigation } from '../navigation/types';


LogBox.ignoreLogs(["Non-serializable values were found in the navigation state. Check:"]);




type FilterSwitchPropsType = {
    title: string
    value: boolean
    onChange: (value: boolean) => void
}

const FilterSwitch = ({title, value, onChange}: FilterSwitchPropsType) => {
    return (<View style={styles.cont}>
            <AppText>{title}</AppText>
            <Switch
                trackColor={{true: colors.primaryColor}}
                thumbColor={colors.primaryColor}
                value={value}
                onValueChange={onChange}/>
        </View>
    )
}

export const FiltersScreen = () => {

    const navigation = useAppNavigation()
    // const  route: RouteProp<{ params: { save: any } }, 'params'> = useRoute();

    const route = useRoute();
    const dispatch = useAppDispatch()


    const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
    const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
    const [isVegan, setIsVegan] = useState<boolean>(false);
    const [isVegetarian, setIsVegetarian] = useState<boolean>(false);

    const saveFilters = useCallback(() => {
        const settledFilters: filtersSettings = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(settledFilters)
        dispatch(setFiltersAC({filters: settledFilters}))

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])


    useLayoutEffect(() => {

        navigation.setOptions(
            {
                headerTitle: "Filter",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: colors.primaryColor},
                headerTintColor: "white",
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="Menu" iconName="ios-menu"
                              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
                    </HeaderButtons>
                ),
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="Save" iconName="ios-save"
                            // onPress={() => navigation.getParam("save")}/>

                            // onPress={ ()=> route.params && route.params.save}
                            // @ts-ignore
                            //   onPress={route.params && route.params["save"]}
                              onPress={saveFilters}

                        />
                    </HeaderButtons>
                ),
            });
    }, [navigation, isGlutenFree, isLactoseFree, isVegan, isVegetarian]);


    // useEffect(() => {
    //     navigation.setParams({save: saveFilters})
    // }, [saveFilters])


    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Available Filters</AppText>
            <FilterSwitch value={isGlutenFree} title={"Gluten-free"}
                          onChange={(newValue) => setIsGlutenFree(newValue)}/>
            <FilterSwitch value={isLactoseFree} title={"Lactose-free"}
                          onChange={(newValue) => setIsLactoseFree(newValue)}/>
            <FilterSwitch value={isVegan} title={"Vegan"} onChange={(newValue) => setIsVegan(newValue)}/>
            <FilterSwitch value={isVegetarian} title={"Vegetarian"} onChange={(newValue) => setIsVegetarian(newValue)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontFamily: "open-sans-bold",
        textAlign: "center",
        fontSize: 22,
        margin: 20
    },
    cont: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 15
    },

});
