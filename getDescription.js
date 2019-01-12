window.onload = function() {
    chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(JSON.stringify(request, null, 2));
    // if (request.greeting === "hello")
      var k = document.getElementsByClassName('logo');
      console.log(k.length);
      console.log(JSON.stringify(k, null, 2));
      console.log(JSON.stringify(document, null, 2));
      sendResponse({farewell: "goodbye"});
  		console.log('Sent response of goodybe update.');
  });
 //    const k = window.document;
	// console.log(JSON.stringify(k, null, 2));
};

// window.add

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOM content loaded.');
	const k = document.getElementsByClassName('passcode-input')
	console.log(JSON.stringify(k, null, 2));
})