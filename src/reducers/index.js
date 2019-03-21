import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'My Shadow', duration: '3:18'},
    {title: 'Dead Moon Night', duration: '4:47'},
    {title: 'Ack Ack Ack Ack', duration: '1:01'},
    {title: 'Mystery', duration: '1:48'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
};


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
