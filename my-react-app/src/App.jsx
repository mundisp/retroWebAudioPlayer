import './App.css'
import Song from './Song.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Intro from './Intro.jsx'
import Playlist from './Playlist.jsx'
import React, {useState, useEffect, useRef} from 'react';
import Button from 'react-bootstrap/Button';

function App() {

  class musicList{

    constructor(){
    this.images = [];
    this.audioPath = [];
    this.names = [];
    }

    populateNames(){
      for(let i=0; i<this.audioPath.length; i++){
        this.names[i] = this.audioPath[i].substring(13);
      }
    }
  }

  //Object holding all the attributes of a playlist
  const playlist = new musicList;
  
  //Covers for the songs
  playlist.images[0] = "./src/assets/paronator.jpeg"
  playlist.images[1] = "./src/assets/wayoutwestjpeg.jpg"
  playlist.images[2] = "./src/assets/tigris.jpg"
  
  //Array with path/location of songs
  playlist.audioPath[0] = './src/assets/Morning Mist.mp3'
  playlist.audioPath[1] = './src/assets/Dancehall Tornado.mp3'
  playlist.audioPath[2] = './src/assets/Mark Alow - Trip To The Lonely Planet.mp3'

  playlist.populateNames();

  //Keeps track of the most recent song selection
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedFileNames, setSelectedFileNames] = useState([]);

  const handleFiles = (files)=> {

    setSelectedFileNames(files);

    for(var i=0; i<files.length; i++){

      console.log(`song name is ${files[i]}`); 
    }

  }

  const handleSongSelect = (index)=> {
    setSelectedSongIndex(index);
  };


  var playlistStatus = 'Open Playlist';

  const handleOpenPlaylist = ()=>{

   setIsNavbarOpen(!isNavbarOpen);

  }

  return(
    <>
      <Intro onFileSelection={handleFiles}/>

      
      <div className='playContainer'>
      <Button variant="secondary" className='playlistBtn' onClick={handleOpenPlaylist}>
        {isNavbarOpen ? 'Hide' : 'Open playlist'}
      </Button>
        
        {isNavbarOpen && (
        <Playlist playlist={playlist.audioPath} onSongSelect={handleSongSelect}/>
        )}
      
        </div>
      
    <div id="songContainer">
      <Song 
      name={playlist.names[selectedSongIndex]}
      genre="Deep house" 
      image={playlist.images[selectedSongIndex]} 
      inLibrary={false} 
      audioLocation={playlist.audioPath[selectedSongIndex]}
      />
    </div>


  <div className='dropdown'>
    <Button variant="secondary">Select background</Button>

      <div className='dropdownList'>
        <a href="#">Retrowave Style</a><br></br>
        <a href="#">Maldives</a><br></br>
        <a href="#">Universe</a><br></br>
      </div>
      
  </div>

  </>
  );
}

export default App
