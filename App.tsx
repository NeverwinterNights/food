import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback, useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {MealsNavigator} from "./navigation/MealsNavigator";
import {enableFreeze} from 'react-native-screens';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import {MealsTabNavigator} from "./navigation/MealsTabNavigator";
import {DrawerNavigator} from "./navigation/DrawerNavigator";
import {store} from "./store/store";
import {Provider} from "react-redux";



enableFreeze(true);

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    })
}


export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await fetchFonts()
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                 console.warn(e);
            } finally {
                setIsLoaded(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }


    return (
        <Provider store={store}>
        <View onLayout={onLayoutRootView} style={{flex: 1}}>
            <StatusBar style="auto"/>
            <NavigationContainer>
              <OverflowMenuProvider>
                    {/*<MealsTabNavigator/>*/}
                    <DrawerNavigator/>
               </OverflowMenuProvider>
            </NavigationContainer>
        </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
