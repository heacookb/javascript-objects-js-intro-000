var playlist = {
  artist: "",
  song: ""
};
function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artist] = artistName;
  playlist[song] = songTitle;
  return playlist;
}