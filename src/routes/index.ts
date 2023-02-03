import {UnsplashGetAllPhotoDataInterface} from "../interfaces";
import {CompositeNavigationProp, RouteProp} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Routes_} from "../constants";


export type NewslineParams = { [Routes_.NewsLine]: undefined }
export type PhotoParams = { [Routes_.Photo]: { item: UnsplashGetAllPhotoDataInterface } }

export type NewsLineNavigationProp =
    CompositeNavigationProp<NativeStackNavigationProp<NewslineParams, Routes_.NewsLine>,
    CompositeNavigationProp<NativeStackNavigationProp<NewslineParams, Routes_.NewsLine>,
        NativeStackNavigationProp<PhotoParams,Routes_.Photo>>>;

export type PhotoRouteProps<RouteName extends keyof PhotoParams> = RouteProp<PhotoParams,Routes_.Photo>
