import { reducerCases } from "./Constants";

export const initialState = {  
    token: null,    // null is the initial value of token
    playlists: [],  // [] is the initial value of playlists
    userInfo: null,      // [] is the initial value of users
    selectedPlaylistId: '7yUomznoYxH89bMHpA5xuK', // null is the initial value of selectedPlaylist
    selectedPlaylist: null,
    currentTrack: null,
    playerState: false,
} 


export const reducer = (state, action) =>{ 

    switch(action.type){ // action.type is the type of action dispatched
    case reducerCases.SET_TOKEN:{
        return{
            ...state,    // ...state means keep the current state as it is and change the token to action.token 
            token: action.token,  // action.token is the token dispatched 
        };
    }

    case reducerCases.SET_PLAYLISTS:{
        return{
            ...state, 
            playlists: action.playlists,  // action.playlists is the playlists dispatched
        };
    }

    case reducerCases.SET_USERS:{
        return{
            ...state,
            userInfo: action.userInfo,
        }; 
    }

    case reducerCases.SET_SELECTED_PLAYLIST:{
        return{
            ...state,
            selectedPlaylist: action.selectedPlaylist,
        };
    }

    case reducerCases.SET_CURRENT_TRACK:{
        return {
            ...state,
            currentTrack: action.currentTrack,
        };
    }

   

    case reducerCases.SET_PLAYER_STATE:{
        return {
            ...state,
            playerState: action.playerState,
        };
    }

    case reducerCases.SET_PLAYLIST_ID:{
        return {
            ...state,
            selectedPlaylistId: action.selectedPlaylistId,
        };
    }



        default:
            return state;

    } 
}