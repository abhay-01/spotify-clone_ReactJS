import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import { FiClock } from 'react-icons/fi';



export default function Body() {
  const [{ token, selectedPlaylistId, selectedPlaylist}, dispatched] = useStateProvider();

  useEffect(() => {

    const getPlaylist = async () => {

      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {

          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );

      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a") ? "" : response.data.description, 
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => {
           const id =track.id;
           const name = track.name;
           const artist = track.artists.map((artist) => artist.name).join(",");
           const duration = track.duration_ms;
           const image  = track.album.images[2].url;
            const album  = track.album.name;
            const uri = track.uri;
            const track_number = track.track_number;

            return {
              id,
              name,
              artist,
              duration,
              image,
              album,
              uri,
              track_number
            };
        })
      }
       
      // console.log(selectedPlaylist);
      dispatched({
        type: reducerCases.SET_SELECTED_PLAYLIST, selectedPlaylist
      });
    };

    getPlaylist();
  }, [token, dispatched,selectedPlaylistId]);

 
  const msToTime  = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <Container>
      {


        selectedPlaylist && (  // if selectedPlaylist is not null then render the following code
          <>
          <div className='playlist'>
            <div className='image'> 
              <img src={selectedPlaylist.image} alt='playlist' /> 

            </div>
            <div className='info'>
              <h2 className='title'>{selectedPlaylist.name}</h2>
              <p className='description'>{selectedPlaylist.description}</p>
            </div>
          </div>

          <div className='list'>
            <div className='header_row'>
              <div className='col'>
                <span>#</span>

            </div>
            <div className='col'>
                <span>TITLE</span>

            </div>
            <div className='col'>
                <span>ALBUM</span>

            </div>

            <div className='col'>
                <span><FiClock/></span>
            </div>
          </div>
          <div className='tracks'>
  {
   
   selectedPlaylist.tracks.map(({id,name,artist,duration,image,album,uri,track_number},index) => {
    
    return (
      <div className='row' key = {id}>
        <div className='col'>
          <span> {index+1}</span>
        </div>
        <div className='col-detail'>
          <div className='image'>
            <img src = {image} alt = "track"/>

          </div>
          <div className='info'>
            <span className='name'>{name}</span>
            <span className='art'> {artist}</span>

          </div>
        </div>
        <div className='col'>
          <span>{album}</span>
        </div>
        <div className='col'>
          <span>{msToTime(duration)}</span>
        </div>
      </div>

    )
  })}
</div>

          </div>  
          </>
        )
      }
    </Container>
  );
}

const Container = styled.div`
  flex: 0.8;
  background-color: #808080; 
  color: white;
  font: lora;
  padding: 1rem;
  .playlist {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    .image {
      flex: 0.3;
      img {
        width: 80%;
        height: 100%;
        object-fit: contain;
        box-shadow: rgba(0,0,0,0.2) 0px 18px 5px 5px
      }
    }
    .info {
      flex: 0.7;
      .title {
        font-size: 3rem;
        margin-bottom: 0.5rem;
      }
      .description {
        font-size: 1rem;
      }
    }
  }
  .list {
    .header_row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.6fr;
      top: 15vh;
      padding: 1rem 3rem;
      font-size: 1rem;
      transition: 0.3s ease-in-out;
      .col {
        flex: 0.1;
        margin-top: 4rem;
        color:

        span {
          font-size: 1rem;
          font-weight: bold;
          color: #D3D3D3;
          
        }
      }

    }
    .tracks {
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 1rem 3rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.6fr;
        margin-top: 1rem;
        margin-right: 1rem;
        &:hover{
          background-color: #363636;
          cursor: pointer;
          border-radius: 10px;
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img{
            height: 50px;
          }
    }

    .col-detail {
      display: flex;
      align-items: center;
      gap: 1rem;

      .image {
        &:hover{
          transform: scale(1.3);
          transition: 0.3s ease-in-out;
        }
      }

      .info{
        display: flex;
        flex-direction: column;
        .name{
          margin-block: 0px;
       font-size: 1rem;
        &:hover{
          text-decoration: underline;
          transition: 0.3s ease-in-out;
          color: green;
          font-weight: bold;
          font-size: 1.4rem;

        }
        }

        .art{
          &:hover{
            text-decoration: underline;
            transition: 0.3s ease-in-out;
            font-weight: bold;
          }

      }

    }



`;
