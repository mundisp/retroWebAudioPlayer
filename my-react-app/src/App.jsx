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
  playlist.images[0] = "./src/assets/djoko.jpg"
  playlist.images[1] = "./src/assets/efkxa.jpg"
  playlist.images[2] = "./src/assets/dvrst.jpg"
  
  //Array with path/location of songs
  playlist.audioPath[0] = './src/assets/Let You Go - DJOKO.mp3'
  playlist.audioPath[1] = './src/assets/what about the soul - efxka.mp3'
  playlist.audioPath[2] = './src/assets/Still Breathing - DVRST.mp3'

  playlist.populateNames();

  //Keeps track of the most recent song selection
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const [selectedFileNames, setSelectedFileNames] = useState([]);


  const [newPlaylist, setNewPlaylist] = useState(new musicList());




  const handleFiles = (files)=> {

    setSelectedFileNames(files);

    /*
    for(var i=0; i<selectedFileNames.length; i++){

      console.log(`song name is ${selectedFileNames[i]}`); 
    }
    */
    const newPlaylist = new musicList();
    newPlaylist.names = selectedFileNames;
    setNewPlaylist({...newPlaylist});
  }



  // Define setPlaylist to manage the playlist state
  
  const handleUrls = (urls) => {
    setNewPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      audioPath: urls,
    }));
  };




  const handleSongSelect = (index)=> {
    setSelectedSongIndex(index);
  };


  var playlistStatus = 'Open Playlist';

  const handleOpenPlaylist = ()=>{

   setIsNavbarOpen(!isNavbarOpen);

  }

  return(
    <>
      <Intro onFileSelection={handleFiles} onUrlSelection ={handleUrls}/>

      
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
      selectedFiles={selectedFileNames}
      />
    </div>


  <div className='dropdown'>
    <Button variant="secondary">Select background</Button>

      <div className='dropdownList'>
        <a href="#">Retrowave Style</a><br></br>
        
      </div>
      
  </div>

  </>
  );
}

export default App
