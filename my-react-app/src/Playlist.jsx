import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import Button from 'react-bootstrap/Button';

function Playlist(props){
    const songs = props.playlist;

    function createPlaylist(){

        const playlistItems = [];

        for(let i=0; i<songs.length;i++){
            //Pushing song names to the playlist to be displayed
            playlistItems.push(
            <li key={i}>
            <button onClick={()=> props.onSongSelect(i)}>
                {songs[i]}
            </button>
            </li>);
        }
        return playlistItems;

    }
    
    return(
        <> 
            <nav className="navbar">
                <ul>
                    {createPlaylist()}  
                </ul>
            </nav>
        </>
    );

}

Playlist.PropTypes ={

    
    names: PropTypes.array.isRequired,
    onSongSelect: PropTypes.func.isRequired,
}



export default Playlist