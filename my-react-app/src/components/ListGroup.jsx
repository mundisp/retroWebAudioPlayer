import { useState } from "react";


function ListGroup(){

    const playlist = ['Amanecer','Wind, Brass and Bells','Decompression'];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    useState

    return(

    <>
        <h1>Playlist</h1>

        {playlist.length == 0 && <p>No songs in the playlist</p>}
        <ul className='list-group'>
            {playlist.map((song, index) => (

            <li 
            className={ selectedIndex == index ? "list-group-item active"
                                                : "list-group-item"} 
            key={song} 
            onClick={() => setSelectedIndex(index)}
            >
                {song} 
            </li>
            ))}
        </ul>
    
    </>

    );
}

export default ListGroup