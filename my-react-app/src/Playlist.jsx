import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import Button from 'react-bootstrap/Button';

function Playlist(props){

    const songs = props.playlist;

    function createPlaylist(){

        const playlistItems = [];

        for(let i=0; i<songs.length;i++){

            //Getting rid of the path
            let newSubstring = songs[i].substring(13);
            console.log(`song: ${songs[i]}`);
            //Pushing song names to the playlist to be displayed
            playlistItems.push(<li key={i}>
            <button onClick={()=> props.onSongSelect(i)}>
                {newSubstring}
            </button></li>);

        }
        return playlistItems;

    }
    function songSelected(index){

        console.log(`Song ${index} selecteeeeed!`);

    }
    

    return(

        <>
            
            <nav className="navbar">
                
                
                <ul>
                    {createPlaylist()}
                    <li><button>Random SONG</button></li>
                    
                </ul>

            </nav>
        </>
    );

}

Playlist.PropTypes ={

    
    audioPath: PropTypes.array.isRequired,
    onSongSelect: PropTypes.func.isRequired,
}



export default Playlist