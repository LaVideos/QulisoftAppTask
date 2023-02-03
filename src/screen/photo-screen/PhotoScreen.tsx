import React from 'react';
import {View} from "react-native";
import {COLORS} from "../../constants";
import {PostDetails} from "../../components";

const PhotoScreen = () => {
    return <View style={{backgroundColor:COLORS.BASE_COLOR,width:"100%",height:"100%"}}><PostDetails/></View>;
};



export default PhotoScreen;
