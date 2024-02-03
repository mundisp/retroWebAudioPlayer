import './App.css'
import Song from './Song.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Intro from './Intro.jsx'
import Playlist from './Playlist.jsx'
import React, {useEffect, useState} from 'react';
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
  
  //Default playlist Array with path/location of songs
  playlist.audioPath[0] = './src/assets/Let You Go - DJOKO.mp3'
  playlist.audioPath[1] = './src/assets/what about the soul - efxka.mp3'
  playlist.audioPath[2] = './src/assets/Still Breathing - DVRST.mp3'

  playlist.populateNames();

  

  const placeholderCover = './src/assets/coverArt.jpg';
  const wallpapers = ['./src/assets/retrowaveNeon.jpg',
                      './src/assets/retro2.jpg',
                      './src/assets/retro3.jpg',
                      './src/assets/img4.jpg',
                      './src/assets/img5.jpg',
                      './src/assets/img6.jpg',
                      './src/assets/img7.jpg'];

  //Keeps track of the most recent song selection
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  //Changes the state of the navigation bar
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  //Generates playlist based on files selected by user
  const[updatedPlaylist, setUpdatedPlaylist] = useState(new musicList()); 

 //Default playlist if no songs selected
  useEffect(()=>{

    setUpdatedPlaylist(playlist);

  }, []);

  const handleFiles = (files, urls)=> {

    for(var i=0; i<files.length; i++){
      console.log(`song name is ${files[i]}`); 
    }
    for(var i =0; i < urls.length; i++){
      console.log(`URL is ${urls[i]}`);
      }

    //New musiclist with the selected files
    const newPlaylist = new musicList();
    newPlaylist.names = files;
    newPlaylist.audioPath = urls;
    
    setUpdatedPlaylist(newPlaylist);

  }

  const handleForwardSelection = ()=>{
    setSelectedSongIndex(selectedSongIndex + 1);
  }


  const handleSongSelect = (index)=> {
    setSelectedSongIndex(index);
  };

  const handleOpenPlaylist = ()=>{
   setIsNavbarOpen(!isNavbarOpen);
  }



  function changeBackground(imageIndex){

    document.body.style.backgroundImage = `url(${wallpapers[imageIndex]})`

  }

  return(
    <>
      <Intro onFileSelection={handleFiles}/>

      
      <div className='playContainer'>
      <Button variant="secondary" className='playlistBtn' onClick={handleOpenPlaylist}>
        {isNavbarOpen ? 'Hide' : 'Open playlist'}
      </Button>
        

        {isNavbarOpen && (
        <Playlist playlist={updatedPlaylist.names} onSongSelect={handleSongSelect}/>
        )}
      
        </div>
      
    <div id="songContainer">
      <Song 
      name={updatedPlaylist.names[selectedSongIndex]}
      
      image={placeholderCover} 
      inLibrary={false} 
      audioLocation={updatedPlaylist.audioPath[selectedSongIndex]}
      forwardSelection={handleForwardSelection}
      
      />
    </div>


  <div className='dropdown'>
    <Button variant="secondary">Select background</Button>

      <div className='dropdownList'>
       
        <button onClick={ ()=> changeBackground(0)}>Original retrowave</button>
        <button onClick={ ()=> changeBackground(1)}>Better retro</button>
        <button onClick={ ()=> changeBackground(2)}>OMG</button>
        <button onClick={ ()=> changeBackground(3)}>ring</button>
        <button onClick={ ()=> changeBackground(4)}>moon</button>
        <button onClick={ ()=> changeBackground(5)}>chillin' w/cat</button>
        <button onClick={ ()=> changeBackground(6)}>chillin' w/cat for girls</button>
      </div>
      
  </div>

  </>
  );
}

export default App
