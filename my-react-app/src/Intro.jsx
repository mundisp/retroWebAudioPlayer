import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Intro({onFileSelection}){

    const [isIntroVisible, setIsIntroVisible] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);
    
    function handleButtonClick(){
        setButtonClicked(true);


        const fileInput = document.getElementById('fileInput');
        const files = fileInput.files;

        if (files.length === 0) {
            alert('Please select one or more MP3 files.');
            return;
        }


    // Extract file names
    const fileNames = Array.from(files, (file) => file.name);

    // Call the function passed from App.jsx with the file names
    onFileSelection(fileNames);





        // Process the selected files
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            console.log(`File Name: ${file.name}, Size: ${file.size} bytes`);
            // You can perform further processing on each file here
        }

    }

    

return(
    <>
    {isIntroVisible && (
    
    <div className='intro' style={{animation: buttonClicked ? 'slideUp 3s ease-in forwards' : ''}}>
    
    <h1 className='welcome-text'>Welcome, please select the source folder for your playlist</h1>
    
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