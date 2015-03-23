function getImageUrl(searchTerm, callback, errorCallback) {}

function setCurrentSong(songName) {
   $("#current_song")[0].textContent = songName;
}

function initClickHandlers() {

    $("#previous").click(function() {
        setCurrentSong("previous clicked");
    });

    $("#play").click( function() {
        setCurrentSong("play clicked");
    });

    $("#pause").click( function() {
        setCurrentSong("pause clicked");
    });

    $("#next").click( function() {
        sendToTabs("next");
        setCurrentSong("next clicked");
    });

    $("#toggle").click( function() {
        sendToTabs("toggle");
        setCurrentSong("toggle clicked");
    });
}


function sendToTabs(action) {
   queryInfo = {
       url: ["https://gaana.com/*", "http://gaana.com/*"]
   }
   console.log("inside sendToTabs");
   chrome.tabs.query(queryInfo, function  (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: action}, function  (resp) {
         console.log(response.farewell);
         console.log(response.status);
      })
   })

};

document.addEventListener('DOMContentLoaded', function() {
    initClickHandlers();
});

