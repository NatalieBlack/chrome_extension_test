//background script is allowed to make requests to other sites
chrome.browserAction.onClicked.addListener(function(tab) { 
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/home.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        chrome.tabs.sendMessage(tab.id, {"message": "twinty data", "data": xhr.responseText});//the keys (ie. message, data) can be whatever you want
      }
    }
    xhr.send();
});
