// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Playlist from './components/Playlist'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import TrackList from './components/TrackList'
import './App.css'
import songs from './assets/utils/songs.json'


function App() {

  return (
    <>
      <h1>Dummy Spotify app</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <TrackList data = {songs} />
    </>
  )
}

export default App
