import React, { useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import styled from 'styled-components';

export default function Playlist() {
  const [{ token, playlists}, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylist = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });

      const { items } = response.data; 

      const playlists = items.map(({name,id}) =>{ 
            return {name,id}
      });
      // console.log(playlists);

      dispatch({
        type: reducerCases.SET_PLAYLISTS,
        playlists,
      });
    };

    getPlaylist();  
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({
      type: reducerCases.SET_PLAYLIST_ID,
      selectedPlaylistId,
    });
  }

  return (
    <Container>
     <ul>
        {
            playlists.map(({name,id}) =>{
                return <li key={id} onClick={()=> {
                  changeCurrentPlaylist(id);
                }}>{name}</li>
            }
            )
        }
     </ul>

    </Container>
  )
}

const Container = styled.div`

height: 100%;
overflow:hidden;
ul{

    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 0.5rem;
        &-thumb{
          background-color:  rgba(255,255,255,0.6);
        }
        }

    li{
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
