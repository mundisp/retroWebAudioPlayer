import React, {useState} from 'react';
import PropTypes from 'prop-types';


function Intro({onFileSelection, onUrlSelection}){

    const [isIntroVisible, setIsIntroVisible] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);
    
    function handleButtonClick(){
        setButtonClicked(true);

        const fileInput = document.getElementById('fileInput');
        const files = fileInput.files;

        //Getting the URL from each file
        const fileURLS = []
        for(var i = 0; i<files.length; i++){
            fileURLS[i] = URL.createObjectURL(files[i]);
        }
        
        
        if (files.length === 0) {
            
            return;
        }
        
    // Extract file names
    const fileNames = Array.from(files, (file) => file.name);
    onFileSelection(fileNames, fileURLS);
    }

return(
    <>
    {isIntroVisible && (
    
    <div className='intro' style={{animation: buttonClicked ? 'slideUp 3s ease-in forwards' : ''}}>
    
    <h1 className='welcome-text'>Welcome, please select multiple songs holding 'ctrl' key</h1>
    
    <br></br>
    <input type="file" id="fileInput" accept='.mp3' multiple/>
    <button className='importBtn' onClick={handleButtonClick}>Import playlist</button>
    </div>
    )}
    </>
);

}


Intro.propTypes = {
    onFileSelection: PropTypes.func.isRequired,
    
  };

export default Intro