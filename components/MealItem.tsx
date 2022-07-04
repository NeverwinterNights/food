import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from "./AppText";
import {MealType} from "../data/dummy-data";
import colors from "../config/colors";

type MealItemPropsType = {
    item: MealType
    onMealSelect: () => void
}

export const MealItem = ({item, onMealSelect}: MealItemPropsType) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onMealSelect}>
                <View>
                    <View style={[styles.mealRow, styles.header]}>
                        <ImageBackground source={{uri: item.imageUrl}} style={styles.bg}>
                            <View style={styles.titleContainer}>
                                <AppText numberOfLines={1} style={styles.title}>{item.title}</AppText>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.mealRow, styles.mealDetail]}>
                        <AppText style={{fontFamily:"open-sans"}}>{item.duration}m</AppText>
                        <AppText style={{fontFamily:"open-sans"}}>{item.complexity.toUpperCase()}</AppText>
                        <AppText style={{fontFamily:"open-sans"}}>{item.affordability.toUpperCase()}</AppText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row"
    },
    container: {
        height: 200,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius:10,
        overflow:"hidden",
        marginBottom:10
    },
    header: {
        height: "85%"
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems:"center",
        height:"15%"
    },
    bg: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        color: colors.white,
        textAlign: "center"
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingHorizontal: 12,
        paddingVertical: 5,
    }
});
