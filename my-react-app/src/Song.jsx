import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import { BsFillPlayFill, BsSkipForwardFill, BsFillPauseFill,
    BsSkipBackwardFill } from "react-icons/bs";



function Song(props){

    const handleEvent = () => console.log(props.name + " is playing")

    const audioRef = useRef(null);
    const progressFillRef = useRef(null);

    const [isPlaying, setPlay] = useState(false);
    const [playButton, setPlayButton] = useState('play');
    const [progressWidth, setProgressWidth] = useState(0);
    
    

    useEffect(()=> {

        

        const updateProgressBar = () => {
            const song = audioRef.current;
            const percentage = (song.currentTime / song.duration) * 100;
            setProgressWidth(percentage);

        };
        const song = audioRef.current;
        song.addEventListener('timeupdate', updateProgressBar);

        

        return ()=> {
            song.removeEventListener('timeupdate', updateProgressBar);

        };

    },[]);

    
    function playSong(){
        const song = audioRef.current;
        setPlay(!isPlaying)
        if(playButton == 'play'){
            setPlayButton('stop');
            song.play();
        }
        else{
            setPlayButton('play');
            song.pause();
        }
    }  

    function resetSong(){
        const song = audioRef.current;
        song.currentTime = 0;
    }
    function endSong(){
        const song = audioRef.current;
        song.currentTime = song.duration;
    }
    function updateSongTime(){
        const song = audioRef.current;
        const progressFillBar = progressFillRef.current;

        //Getting percentage of the 'range' progress bar
        var percentage = progressFillBar.value / 100;
        //Locating the part of the song based on the percentage of the progress bar
        var newTime = percentage * song.duration;

        //Updating the current time to the new selected time
        song.currentTime = newTime;

    }
   
        
    

    return(
        <>
        
        <div className='song' onClick={handleEvent}>

            <img src={props.image} className='songImage'></img>
            <span>{isPlaying ? "Playing" : "Not playing"}</span>
            <div className='songInfo'>
            <h2>{props.name}</h2>
            <h2>{props.genre}</h2>
            <h2>{props.inLibrary ? "Available" : "Not in the library"}</h2>
            
            </div>


            
            <div className='playerControls'>
            <button className='backwardIcon' onClick={resetSong}>
                <BsSkipBackwardFill  size='35px'color='white'/>
            </button>

            <button className="playButton" onClick= {playSong}>
                {isPlaying ? <BsFillPauseFill size='45px'/> : <BsFillPlayFill size='45px'/>
            }</button>

            <button className='forwardIcon' onClick={endSong}>
                <BsSkipForwardFill size='35px' color='white'/>
            </button>
            </div>
            
            

           

            <audio ref={audioRef} id='myAudio'>
                <source src={props.audioLocation}/>
            </audio>
            
           
            <div className='progressBar' value='0'>
            </div>
            
            <input type='range' id='progressFill' 
                    ref={progressFillRef}
                    value={progressWidth}
                    max='100'
                    onChange={updateSongTime}></input>
                    
        </div>
    </>
    );


}

Song.PropTypes ={

    name: PropTypes.string,
    genre: PropTypes.string,
    inLibrary: PropTypes.bool,
    image: PropTypes.string,
    audioLocation: PropTypes.string,
}

Song.defaultProps ={

    name: 'unknwon',
    genre: 'unknown genre',
    inLibrary: false,
    
}


export default Song