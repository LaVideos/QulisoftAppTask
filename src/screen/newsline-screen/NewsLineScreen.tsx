import React from 'react';
import {Posts} from "../../components";
import {View} from "react-native";
import {COLORS} from "../../constants";

const NewsLineScreen = () => {
    return <View style={{backgroundColor:COLORS.BASE_COLOR,width:"100%",height:"100%"}}><Posts/></View>;
};
export default NewsLineScreen;
