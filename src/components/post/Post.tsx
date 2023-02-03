import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {UnsplashGetAllPhotoDataInterface} from "../../interfaces";
import {COLORS, Routes_} from "../../constants";
import {NewsLineNavigationProp} from "../../routes";

interface UnsplashPhotoInterface {
    item: UnsplashGetAllPhotoDataInterface;
}

const Post = ({item}: UnsplashPhotoInterface) => {
    const navigation = useNavigation<NewsLineNavigationProp>();
    return (
        <TouchableHighlight style={[styles.container]}
                            onPress={()=>navigation?.navigate(Routes_.Photo,{item:item})}>
            <>
                <Image style={[styles.photo]} source={{uri: item?.urls.small}}/>
            </>
    </TouchableHighlight> );
};

const styles = StyleSheet.create({
    photo:{
        width:"100%",
        height:"100%",
        backgroundColor:COLORS.BASE_COLOR
    },
    container:{
        aspectRatio: 1,
        width: '100%',
        flex: 1,
        flexDirection:"row",
    }
});

export default Post;
