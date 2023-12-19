import { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import songs from "./assets/utils/songs.json";
import Footer from "./components/Footer";

function App() {
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [searchResults, setSearchResults] = useState({ songs: [] });

  const handleAddSong = (song) => {
    if (!selectedSongs.some((selectedSong) => selectedSong.id === song.id)) {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredSongs = songs.songs.filter(
      (song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults({ songs: filteredSongs });
  };

  return (
    <>
      <h1>Dummy Spotify app</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="BodyContainer">
        <div className="SeparatorContainer">
          <SearchResults 
            data={searchResults} 
            onAddSong={handleAddSong}
          />
        </div>
        <div className="SeparatorContainer">
          <Playlist selectedSongs={selectedSongs} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
