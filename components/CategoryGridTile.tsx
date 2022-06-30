import React, {ReactNode} from 'react';
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {AppText} from "./AppText";

type CategoryGridTilePropsType = {
    title: string
    onSelect: () => void
    color: string
}

export const CategoryGridTile = ({title, color, onSelect}: CategoryGridTilePropsType) => {

    let TouchableComponent: any = TouchableOpacity

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComponent  onPress={onSelect}>
                <View style={[styles.gridContainer, {backgroundColor: color}]}>
                    <AppText numberOfLines={2} style={styles.text}>{title}
                    </AppText>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    gridContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        textShadowOffset: {width: 0, height: 2},
        elevation: 5,
        padding: 15
    },
    text: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
    }
});
