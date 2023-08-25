import React, { useEffect } from 'react'
import styled from 'styled-components';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

export default function Spotify() {

    const[{token,userInfo}, dispatch] = useStateProvider();  // token is the current state of token and dispatch is the function to dispatch an action to change the state of token
    useEffect(() => {

        const getUserInfo = async () => {

            const {data} = await axios.get('https://api.spotify.com/v1/me', {  
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                  },
                });
        
        
        const userInfo = {  // this is the userInfo object that will be dispatched to the reducer
            userId: data.id,
            userName: data.display_name, 
    };



        dispatch({type: reducerCases.SET_USERS, userInfo});
};
        getUserInfo();

    },[dispatch,token]);  // if token or dispatch changes then execute the useEffect hook
    
  return (
    <Container>
    <div className='spotify_body'>
        <SideBar/>
        <div className='body'>
            <NavBar/>
            <div className='body_contents'>
                <Body/>
            </div>

        </div>
    </div>

    <div className='footer'>
        <Footer/>
    </div>

    </Container>
  )
}

const Container = styled.div`
    display: grid;
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    grid-template-rows: 80vh 20vh;

    .spotify_body{
        display: grid;
        grid-template-columns: 15vw 90vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        background-color: gray; 

    }

    .body{
        height: 100%;
        width: 100%;
        overflow: auto;
        &::-webkit-scrollbar{ 
            width: 0.8rem;
            &-thumb{
                background-color: rgba(255,255,255,0.5);
            }
        

    }


`
;

