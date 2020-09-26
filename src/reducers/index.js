import { combineReducers } from 'redux';

//REDUCERS
const songsReducer = () => {
  return [
    { title: 'Funeral Pyre', duration: '3:34'},
    { title: 'Fever Rest', duration: '4:22'},
    { title: 'Woodland Hunter', duration: '3:52'},
    { title: 'Never Ending Circles', duration: '2:45'},
  ]
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