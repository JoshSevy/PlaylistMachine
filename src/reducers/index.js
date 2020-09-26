import { combineReducers } from 'redux';

//REDUCERS
const songsReducer = () => {
  return [
    { title: 'song', duration: '99:99'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});