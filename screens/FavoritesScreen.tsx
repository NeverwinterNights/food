import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";

type FavoritesScreenPropsType = {
    
}
const useAppNavigation = () => useNavigation<any>()
export const FavoritesScreen = ({}:FavoritesScreenPropsType) => {

    const navigation = useAppNavigation()

 return (       
       <View style={styles.container}>
           <AppText>FavoritesScreen</AppText>
        </View>        
    );
};

const styles = StyleSheet.create({
  container: {
  
  }
});
