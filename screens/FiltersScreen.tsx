import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppText} from "../components/AppText";
import {useNavigation} from "@react-navigation/native";

type FiltersScreenPropsType = {
    
}
const useAppNavigation = () => useNavigation<any>()

export const FiltersScreen = ({}:FiltersScreenPropsType) => {

    const navigation = useAppNavigation()

 return (       
       <View style={styles.container}>
           <AppText>FiltersScreen</AppText>
        </View>        
    );
};

const styles = StyleSheet.create({
  container: {
  
  }
});
