import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';


function Playlist(props){

    const songs = props.playlist;

    function createPlaylist(){

        const playlistItems = [];

        for(let i=0; i<songs.length;i++){

            //Getting rid of the path
            let newSubstring = songs[i].substring(13);

            //Pushing song names to the playlist to be displayed
            playlistItems.push(<li key={i}><button onClick={()=> 
            songSelected(i)}>
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

    name: PropTypes.string,
    playlist: PropTypes.array,
    onSongSelect: PropTypes.func.isRequired,
}



export default Playlist