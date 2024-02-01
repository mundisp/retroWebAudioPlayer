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

            //Pushing song names to the playlist to be displayed
            playlistItems.push(<li key={i}><button onClick={()=> 
            props.onSongSelect(i)}>
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
                {/*<button id='openPlaylist'>Open Playlist</button>*/}
                
                <ul>
                    
                    {createPlaylist()}
                    <li><button>Random SONG</button></li>
                    <li><button>Random SONG
                    Random SONG    
                        Random SONG   

                        Random SONG   <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        <br></br>

                        Random SONG    
                        Random SONG   

                        Random SONG   <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        <br></br>

                        Random SONG    <br></br>
                        v
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG   



                        
                        Random SONG   <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        Random SONG    <br></br>
                        </button></li>
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