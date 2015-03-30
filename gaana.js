chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    var response = {}

    switch(request.action) {
      case "previous":
        $(".previous")[0].click();
        break;
      case "toggle":
        $(".playPause")[0].click();
        break;
      case "next":
        $(".next")[0].click();
        break;
      case "currentInfo":
        // Do nothing, we are looking up the currnet song info below
        break;
      default:
        console.log("Error: Default Message was triggered");
    };

    response.currentAlbum = getCurrentAlbum();
    response.currentArtist = getCurrentArist();
    response.currentSong = getCurrentSong();

    sendResponse(response);
  });

function getCurrentSong() {
  if ($("#tx")[0]) {
    return $("#tx")[0].innerHTML.match(/[^<]*/)[0];
  } else {
    return "";
  }
}

function getCurrentArist() {
  if( $(".albumNamePl")[1] ) {
    return $(".albumNamePl")[1].innerHTML;
  } else {
    return "";
  }
}

function getCurrentAlbum() {
  if( $(".albumNamePl")[0] ) {
    return $(".albumNamePl")[0].innerHTML;
  } else {
    return "";
  }
}
