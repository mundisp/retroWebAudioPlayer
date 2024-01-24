import React, {useState, useEffect} from 'react';


function Intro(){

    const [isIntroVisible, setIsIntroVisible] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);
    
    function handleButtonClick(){
        setButtonClicked(true);
    }

return(
    <>
    {isIntroVisible && (
    
    <div className='intro' style={{animation: buttonClicked ? 'slideUp 3s ease-in forwards' : ''}}>
    
    <h1 className='welcome-text'>Welcome, please select the source folder for your playlist</h1>
    
    <br></br>
    <input type="file" id="ctrl" webkitdirectory directory multiple/>
    <button className='importBtn' onClick={handleButtonClick}>Import playlist</button>
    </div>
    


    )}

 

    </>
);

}

export default Intro