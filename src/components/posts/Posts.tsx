import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {unsplashAction} from "../../redux";
import {UnsplashGetAllPhotoDataInterface} from "../../interfaces";
import {LoadButton, Post, PostDetails} from "../index";
import {COLORS} from "../../constants";


const Posts = () => {
    let {data, page, moreLoading} = useAppSelector(state => state.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (moreLoading || page === 1) {
            dispatch(unsplashAction.getUnsplashPhotos(page));
            dispatch(unsplashAction.setMoreLoading(false));
        }
    }, [page])

    return (
        <SafeAreaView>
            <FlatList
                numColumns={3}
                data={data}
                style={styles.flatList}
                keyExtractor={(item, index) => String(index)}
                renderItem={({item}: { item: UnsplashGetAllPhotoDataInterface }) => (
                    <Post item={item} key={item.id}/>)}
                ListFooterComponent={
                    <View style={[styles.loadMoreBtnContainer]}>
                        {<LoadButton onpress={() => {
                            dispatch(unsplashAction.setPage(page + 1))
                            dispatch(unsplashAction.setMoreLoading(true));
                        }} text={'Load More'}/>}
                    </View>
                }/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flatList: {
        width: '100%',
        backgroundColor: COLORS.BASE_COLOR,
    },
    loadMoreBtnContainer: {
        marginVertical: 10,
        height: 25,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Posts;
