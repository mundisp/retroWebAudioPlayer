import './App.css'
import Song from './Song.jsx'
import ListGroup from './components/ListGroup.jsx'
import Test from './Test.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Intro from './Intro.jsx'
import Playlist from './Playlist.jsx'
import React, {useState, useEffect, useRef} from 'react';

function App() {

  //Covers for the songs
  const imageUrl = "./src/assets/paronator.jpeg"
  const imageUrl2 = "./src/assets/tigris.jpg"
  const imageUrl3 = "./src/assets/wayoutwestjpeg.jpg"

  //Array with path/location of songs
  const playList = [];

  playList[0] = './src/assets/Morning Mist.mp3'
  playList[1] = './src/assets/Dancehall Tornado.mp3'
  playList[2] = './src/assets/Mark Alow - Trip To The Lonely Planet.mp3'

  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const handleSongSelect = (index)=> {
    setSelectedSongIndex(index);
  };

  
  

  return(
    <>
    <Intro/>
    
    <div className='playContainer'>
      <Playlist playlist={playList} onSongSelect={handleSongSelect}/>
      
    </div>
    
<div id="songContainer">

   
  <Song 
  name="Morning mist" 
  genre="Deep house" 
  image={imageUrl} 
  inLibrary={false} 
  audioLocation={playList[0]}
  />
  
  {/*
  <Song name="Dancehall Tornado" genre="Drum n bass" image={imageUrl3} audioLocation={playList[1]}/>
  <Song name="Trip to lonely planet" genre="Prog house" image={imageUrl2} inLibrary={true} audioLocation={playList[2]}/>
  <Song name="extra song" genre="none" image={imageUrl3} inLibrary={true} audioLocation={playList[0]}/>
  */}

</div>


<div className='dropdown'>
  <button className='backgroundBtn'>Select background</button>

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
