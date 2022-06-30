import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from "@expo/vector-icons"
import colors from "../config/colors";

type CustomHeaderButtonPropsType = {}

// export const CustomHeaderButton = ({props}: any) => {
//     console.log('props hB', props)
//     return (
//         <HeaderButton {...props} IconComponent={Ionicons} color={colors.white} iconSize={23} />
//
//     );
// };

export const CustomHeaderButton = (props:any) => {
    return (
    <HeaderButton {...props}  IconComponent={Ionicons} iconSize={23} color={colors.white}  />
)};


const styles = StyleSheet.create({
    container: {}
});


