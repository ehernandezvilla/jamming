// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Playlist from './components/Playlist'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import './App.css'
import songs from './assets/utils/songs.json'


function App() {

  return (
    <>
      <h1>Dummy Spotify app</h1>
      <SearchBar />
      
      <div className='BodyContainer'>
        <div className='SeparatorContainer'>
          <SearchResults data = {songs} />
        </div>
        <div className='SeparatorContainer'>
          <Playlist />
        </div>
      </div>
    </>
  )
}

export default App
