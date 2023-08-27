import React from 'react'
import style from "styled-components"

export default function Login() {

    const handleClick = async() => {
        const clientId = "584b7fec849a46ee84cab49ee6af2fde";
        const redirectURI = "https://spotify-react-clone-ui.netlify.app/";
        const apiURI = "https://accounts.spotify.com/authorize";
        const scopes = [ 
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-state",
            "user-top-read",
            "user-modify-playback-state",
            "user-read-playback-position",
            "user-read-email",
            "user-read-private",
        ];
    
        const authorizationUrl = `${apiURI}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
            " "
          )}&response_type=token&show_dialog=true`;
    
        // Open the authorization URL in a new window or redirect to it
        // depending on your application's requirements
        window.open(authorizationUrl, "_blank");
    };
    
  return (
    <Container>
        <img
        src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt = "spotify-connect"
       
         />

        <button onClick = {handleClick}>Connect with Spotify!</button>
    </Container>
  )
}

const Container = style.div
`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: #1db954;


gap: 4rem;
img {
    height: 20vh;
   }

button {
    border-radius: 4rem;
    border: none;
    background-color: #191414;
    padding: 1rem 5rem;
    color: #1db954;
    font-size: 1.6rem;
    cursor: pointer;
}

`
