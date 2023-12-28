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
  const [playlistName, setPlaylistName] = useState("");

  const handleAddSong = (song) => {
    if (!selectedSongs.some((selectedSong) => selectedSong.id === song.id)) {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  const handleRemoveSong = (songId) => {
    setSelectedSongs(selectedSongs.filter((song) => song.id !== songId));
  };

  const handleSearch = (searchTerm) => { 
    if (searchTerm === "") { // if search bar is empty, display no results
      setSearchResults({ songs: [] });
    } else {
    const filteredSongs = songs.songs.filter(
      (song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults({ songs: filteredSongs });
  }};

  const handleSavePlaylist = () => {
    if (!playlistName) {
      alert("Please enter a playlist name");
      return;
    }
    const playlist = {
      name: playlistName,
      songs: selectedSongs,
    };

    console.log("Playlist saved:", playlist);
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
          <Playlist 
            selectedSongs={selectedSongs} 
            onRemoveSong={handleRemoveSong}
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            onSavePlaylist={handleSavePlaylist}
            />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
