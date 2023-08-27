import React from 'react'
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import { useStateProvider } from '../utils/StateProvider';

export default function NavBar() {
  const[ {userInfo} ] = useStateProvider();  // userInfo is the current state of userInfo

  return (
    <Container>  
      <div className='searchBar'>
        <FiSearch/>
        <input type="text" placeholder='Search for Artists, Songs, or Podcasts'/>
      </div>

      <div className = "profile">
      <a href={userInfo?.userUrl}>
        <CgProfile className='icon'/> 
        <span>
          {userInfo?.name} 
        </span>
        </a>
      </div>

    
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding:1.5 rem;
height: 15vh;
transition: 0.3s ease-in-out;
background-color: none;
position: sticky;
.searchBar{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 1rem 2rem;
    background-color: #282828;
    width: 18vw;     
    border: 1px solid white;
    input{

        border: none;
        background-color: transparent;
        color: white;
        text-shadow: 0 0 0.5rem grey;
        font-size: 0.84rem;
        width: 100%;
        &:focus{

            outline: none;

        }
      }
    }
    .profile{
      display:flex;
      align-items: center;
      justify-content: center;
      padding: 0.9rem;
      border-radius: 1rem;
      margin: 1.6rem 8rem;
      background-color: #282828;
      width:6vw;
      a{
        text-decoration: none;
        color: white;
        font-size: 1.14rem;
        display: flex;
        align-items: center;
        &:hover{
          color: #1db954;
          transition: 0.3s ease-in-out;
        }
      .icon{
        font-size: 1.8rem;
        margin-right: 0.3rem;
      }
    }

`;
