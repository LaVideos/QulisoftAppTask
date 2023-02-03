import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Heart from '../../assets/svg/heart.svg';
import BoolMark from '../../assets/svg/bookmark.svg';
import Comment from '../../assets/svg/comment.svg';
import Send from '../../assets/svg/send.svg';
import {COLORS, Routes_} from "../../constants";
import {useRoute} from "@react-navigation/native";
import {PhotoRouteProps} from "../../routes";


const PostDetails = () => {
    const {params} = useRoute<PhotoRouteProps<Routes_.Photo>>();
    const [like, setLike] = useState<boolean>(false);
    const [likes,setLikes] = useState<number>(params.item.likes);
    useEffect(() => {
        like?setLikes(likes+1):setLikes(params.item.likes)
    }, [like])

    return (
        <View style={[styles.container]}>
            <View style={[styles.upPartOfContainer, styles.directionRow]}>
                <View>
                    <Image style={[styles.avatar]} source={{uri: params.item.user.profile_image.large}}/>
                </View>
                <View style={[styles.usernameContainer, styles.alignItemsCenter, styles.justifyContentCenter]}>
                    <Text style={[styles.fontBold, styles.mainColor, styles.fontSizeLarge]}>{params.item.user.username}</Text>
                </View></View>
            <View
            ><Image style={[styles.img]} source={{uri: params.item.urls.regular}}/></View>
            <View style={[styles.paddingEight]}>
                <View style={[styles.directionRow, styles.justifySpaceBetween, styles.alignItemsCenter]}>
                    <View style={[styles.directionRow]}>
                        <TouchableHighlight
                            underlayColor={COLORS.BASE_COLOR}
                            onPress={() => setLike(!like)}
                            style={[styles.marginRightFifteen]}>
                            <Heart width={28} height={28} fill={like?COLORS.COLOR_RED:COLORS.TEXT_COLOR_MAIN_WHITE}/>
                        </TouchableHighlight>
                        <View style={[styles.marginRightFifteen]}>
                            <Comment width={28} height={28} fill={COLORS.TEXT_COLOR_MAIN_WHITE}/>
                        </View>
                        <View style={[styles.marginRightFifteen]}>
                            <Send width={28} height={28} fill={COLORS.TEXT_COLOR_MAIN_WHITE}/>
                        </View>
                    </View>
                    <View>
                        <BoolMark width={28} height={28} fill={COLORS.TEXT_COLOR_MAIN_WHITE}/>
                    </View>
                </View>
                <View style={[styles.marginTopFive]}>
                    <Text style={[styles.fontExtraBold, styles.mainColor, styles.fontSizeMedium]}>{likes + ` like${likes !== 1 ? 's' : ''}`}</Text>
                </View>
                <View style={[styles.directionRow]}>
                    <Text>
                        <Text style={[styles.fontBold, styles.mainColor, styles.fontSizeLarge]}>{params.item.user.username}</Text>
                        <Text>{"  "}</Text>
                        <Text style={[styles.fontRegular, styles.mainColor, styles.fontSizeLarge]}>{params.item.description ? params.item.description : (params.item.user.bio ? params.item.user.bio : params.item.alt_description)}</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,

    },
    img: {
        width: "100%",
        height: 300
    },
    avatar: {
        height: 45,
        width: 45,
        borderRadius: 100,
        marginLeft: 8
    },
    upPartOfContainer: {
        paddingVertical: 10,
    },
    directionRow: {
        flexDirection: 'row',
    },
    justifyContentCenter: {
        justifyContent: "center",
    },
    alignItemsCenter: {
        alignItems: "center",
    },
    usernameContainer: {
        paddingLeft: 8
    },
    justifySpaceBetween: {
        justifyContent: "space-between"
    },
    paddingEight: {
        padding: 8
    },
    marginRightFifteen: {
        marginRight: 15
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
    marginTopFive: {
        marginTop: 5
    },
    fontSizeSmall: {
        fontSize: 12
    },
    fontSizeMedium: {
        fontSize: 14
    },
    fontSizeLarge: {
        fontSize: 16
    }
});

export default PostDetails;

