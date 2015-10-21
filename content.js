//content script listens for messages from background script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

      if(request.message === "twinty data"){
          console.log(request.data);
          //do stuff to DOM here
      }
    }
);
