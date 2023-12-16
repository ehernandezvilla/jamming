// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import Playlist from './components/Playlist'
import SearchBar from './components/SearchBar'
import TrackList from './components/TrackList';
import './App.css'
import songs from './assets/utils/songs.json'


function App() {
  const [selectedSongs, setSelectedSongs] = useState([]);

  return (
    <>
      <h1>Dummy Spotify app</h1>
      <SearchBar />
      <div className='BodyContainer'>
        <div className='SeparatorContainer'>
        <TrackList data={songs} onAddSong={(song) => setSelectedSongs([...selectedSongs, song])} /> 
        </div>
        <div className='SeparatorContainer'>
          <Playlist selectedSongs={selectedSongs}/>
        </div>
      </div>
    </>
  )
}

export default App
