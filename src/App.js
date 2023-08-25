import React, {useEffect} from 'react'
import Login from './Components/Login';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Spotify from './Components/Spotify';

function App() {

  const[{token},dispatch] = useStateProvider();  // token is the current state of token and dispatch is the function to dispatch an action to change the state of token
  useEffect(() =>{
    const hash = window.location.hash;
    if(hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]; // token is the substring of hash from index 1 to the first occurence of '&' and then split it into an array and then take the first element of the array and then split it into an array and then take the second element of the array
      dispatch({
        type: reducerCases.SET_TOKEN, token // dispatch an action to change the state of token
      });
    }
  },[token, dispatch]);  // if token or dispatch changes then execute the useEffect hook

  return (
    <div>
      {token ? <Spotify /> : <Login />}

    </div>
  )
}


export default App;
