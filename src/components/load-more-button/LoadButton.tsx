import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {COLORS} from "../../constants";
import {useAppSelector} from "../../hooks";

interface LoadButtonInterface{
    text:string,
    onpress?:()=>any
}

const LoadButton = ({text,onpress}:LoadButtonInterface) => {
    return (
        <TouchableHighlight underlayColor={COLORS.BASE_COLOR} style={[styles.btnContainer]} onPress={onpress}>
                <Text style={[styles.text, styles.mainColor, styles.fontBold]}>{text}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:COLORS.COLOR_RED,
        width:120,
        height:30,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    text:{
        textAlign:"center"
    },
    fontBold: {
        fontFamily: 'Baloo2-Bold'
    },
    fontExtraBold: {
        fontFamily: 'Baloo2-ExtraBold'
    },
    fontRegular: {
        fontFamily: 'Baloo2-Medium',
    },
    mainColor: {
        color: COLORS.TEXT_COLOR_MAIN_WHITE
    },
});

export default LoadButton;
