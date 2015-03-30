// Init Function
document.addEventListener('DOMContentLoaded', function() {
    initClickHandlers();
    sendToTabs("currentInfo");
});

function setCurrentSong(songName) {
  $("#current_song")[0].textContent = songName;
}

function setCurrentAlbumArtist(album, artist) {
  $("#album_artist")[0].textContent = album + " - " + artist;
}

function setError(error) {
  if(typeof(error)== "string" && error != "" ) {
    $("#error")[0].textContent = error;
    $("#error").show();
  }
}

function updateUI(response){
  setCurrentSong(response.currentSong);
  setCurrentAlbumArtist(response.currentAlbum, response.currentArtist);
  setError(response.currentError);
}

function initClickHandlers() {
  $("#previous").click(function() {
    sendToTabs("previous");
  });

  $("#next").click( function() {
      sendToTabs("next");
  });

  $("#toggle").click( function() {
      sendToTabs("toggle");
  });
}

function sendToTabs(action) {
  queryInfo = {
    url: ["https://gaana.com/*", "http://gaana.com/*"]
  }
   chrome.tabs.query(queryInfo, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: action}, function(response) {
         if (tabs.length > 1) {
          response.currentError = tabs.length + " tabs with Gaana.com detected. Please close except one."
         }
         console.log(response);
         updateUI(response);
      })
   })
};


