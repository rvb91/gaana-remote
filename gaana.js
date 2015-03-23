function toggleState() {
  console.log("toggle state of player");
  $('body').css("background-color", "red");
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    console.log("calling from the content script");
    switch(request.action) {
      case "toggle":
        $(".playPause")[0].click();
        console.log("should toggle the message");
        break;
      case "next":
        $(".next")[0].click();
        break;
      default:
        console.log("default message is being triggered");
        sendResponse({farewell:"not able to resolve request"})
      };
  });