import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        // currentData: {},
        isLoading: false,
        isErr: false
    },
    reducers: {
        addComment(state, {payload}){
            const index = state.data.findIndex(post => post.id === payload.id)
            state.data[index].comments.push({
              id: new Date().getTime().toString(),
              username: payload.username ,
              text: payload.text 
            })
        },
        addPost(state, {payload}){
            state.data.unshift({...payload})
        },
        delPost(state, {payload}){
            console.log(payload);
            return {
                ...state,
                data: [
                    ...state.data.filter(post => post.id !== payload)
                ]
            }
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, {payload}) => {
           state.isLoading = true;
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return {
                data: [...payload],
                isLoading: false
            }
        }
        
    }
})


export const selectPosts = state => state.posts

export const { addComment, addPost, delPost } = postsSlice.actions

export const postsReducer = postsSlice.reducer