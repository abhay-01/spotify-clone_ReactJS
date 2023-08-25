import React, {useEffect} from 'react'
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';


export default function CurrentTrack() {
    const [{ token, currentTrack}, dispatch] = useStateProvider();

    useEffect(() => {
      const getCurrentTrack = async () => {
        const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing",
         {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        });
  
        console.log(response);
        if(response.data!== ""){

            const {item} = response.data;

            const currentTrack={ // this is the currentTrack object that will be dispatched to the reducer
                id: item.id,
                name: item.name,
                artists: item.artists.map((artist)=>artist.name),
                image: item.album.images[2].url, // 0 is the smallest image, 2 is the largest image

            }
 
       
            dispatch({
                type: reducerCases.SET_CURRENT_TRACK,
                currentTrack
            });
        } 
    };
      getCurrentTrack();  
    }, [token, dispatch]);

  return 
  <Container>
     {
            currentTrack && (  // if currentTrack is not null then render the following
                
                <div className = "track">
                    <div className = "track_image">
                        <img src={currentTrack.image} alt="track_image"/>
                    </div>

                    <div className = "track_info">
                        <h4>{currentTrack.name}</h4>
                        <h6>{currentTrack.artists.join(", ")}</h6>
                </div>
                </div>
            )
        }
  </Container>;
   

    }


const Container = styled.div`

.track{
    display: flex;
    background-color: #282828;
    align-items: center;
    gap: 1rem;
    &_info{
        display: flex;
        fleX-direction: column;
        gap:0.3rem;
        h4{
            color: white;
        }
        h6{
            color: gray;
        }
    }
}

`
