import React from 'react'
import styled from 'styled-components';
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from 'react-icons/md';
import Playlist from './Playlist';

export default function SideBar() {
  return (
    <Container>
        <div className="top_links">
            <div className="logo">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify" />
            </div>
            <ul><span>
                <MdHomeFilled />
                Home
                </span></ul>
            <ul><span>
                <MdSearch/>
                Search
                </span></ul>
            <ul><span>
                <IoLibrary/>
                Your Library
                </span></ul>
        </div>
        <Playlist/>
    </Container>
  )
}


const Container = styled.div`
background-color: #040404;
color: white;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;

.top_links{

    display: flex;
    flex-direction: column;
}

.logo{
    text-align: center;
    margin: 1rem 0;
    img{
        max-inline-size: 80%;
        block-size: auto;  
       
}
}

ul{

    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem;

    span{
       cursor: pointer;
        display: flex;
        gap:0.4rem;
        color: gray;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        &:hover{
            color: white;
        }
    }

}

`;
