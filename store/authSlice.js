import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    userID: "",
    userName: "",
    profilePicture: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state,payload) =>{
            //console.log(state)
        }
    }
})

