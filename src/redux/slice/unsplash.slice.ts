import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {unsplashService} from "../../services";
import {UnsplashGetAllPhotoDataInterface} from "../../interfaces";


export interface initialState {
    data: UnsplashGetAllPhotoDataInterface[];
    page: number,
    moreLoading: boolean,
    loading: boolean

}

const initialState: initialState = {
    data: [],
    page: 1,
    loading: false,
    moreLoading: false
};

const getUnsplashPhotos = createAsyncThunk(
    'unsplashSlice/getUnsplashPhotos',
    async (page: number, {rejectWithValue}) => {
        try {
            const {data} = await unsplashService.getPhotos(page);
            return data
        } catch (e: any) {
            return rejectWithValue(e.response.data)
        }
    }
);

const unsplashSlice = createSlice({
    name: 'unsplashSlice',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setMoreLoading(state, action) {
            state.moreLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUnsplashPhotos.fulfilled, (state, {payload}: { payload: UnsplashGetAllPhotoDataInterface[] }) => {
                state.data = [...state.data, ...payload];
            })
    }
});

const {actions: {setPage,setMoreLoading,setLoading}} = unsplashSlice;


const unsplashAction = {getUnsplashPhotos, setPage,setMoreLoading,setLoading};

const unsplashReducer = unsplashSlice.reducer;

export {
    unsplashReducer,
    unsplashAction,
};

