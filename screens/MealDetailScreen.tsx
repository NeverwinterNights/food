import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";
import {CustomButton} from "../components/CustomButton";

type MealDetailScreenPropsType = {
    
}

const useAppNavigation = () => useNavigation<any>()

export const MealDetailScreen = ({}:MealDetailScreenPropsType) => {

    const navigation = useAppNavigation()

 return (       
       <View style={styles.container}>
           <AppText>MealDetailScreen</AppText>
           <CustomButton children={"Jump to CategoriesScreen"} onPress={() => {
               navigation.navigate("CategoriesScreen")}}/>
        </View>        
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});
