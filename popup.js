// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


function genCodes(newCodes) {

	// save newCodes.
	chrome.storage.sync.set({"codes": newCodes, function() {}});
	chrome.storage.sync.set({"index": 0, function() {}});
	// update codes in screen.
	var div = document.getElementById('CodeDiv');
	div.innerHTML = "Your codes are: ";
	div.innerHTML += newCodes;
	document.body.appendChild(div);
}
document.addEventListener('DOMContentLoaded', function() {
	var div = document.createElement('div');
	div.setAttribute("id", "CodeDiv");
	div.innerHTML = "Your codes are: ";
	// get codes from local storage
	var currentCodes;
	chrome.storage.sync.get("codes", function(result) {
		if(result !== null && result.codes !== null) {
			currentCodes = result.codes;
			// alert(JSON.stringify(result["codes"], null, 2));
			div.innerHTML += result.codes;
			var codeList = result.codes.split(" ");
			document.body.appendChild(div);
			chrome.storage.sync.get("index", function(result) {
				var currentIndex = result.index;
				currentIndex = currentIndex || 0;
				copyTextToClipboard(codeList[currentIndex]);
				// alert(currentIndex + " " + codeList[currentIndex]);
				var newIndex = currentIndex + 2;
				if (newIndex >= codeList.length) {
					newIndex = 0;
				}
				chrome.storage.sync.set({"index": newIndex, function(){}});
			})
		} else {
			// defaults
			div.innerHTML += ""
			document.body.appendChild(div);
		}
        });


  var changeButton = document.getElementById('changeButton');
  changeButton.onclick = function() {
  	var newCodes = prompt('Please enter new codes');
  	if (newCodes === null || newCodes === "" || newCodes === undefined) {
  		newCodes = currentCodes;
  	}
  	genCodes(newCodes);
  }

//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//       console.log(response.farewell);
//   });
// });

//   chrome.tabs.executeScript({
//     "file": "getDescription.js",
//     "allFrames" : true
// });

})


function copyTextToClipboard(text) {
  //Create a textbox field where we can insert text to. 
  var copyFrom = document.createElement("textarea");

  //Set the text content to be the text you wished to copy.
  copyFrom.textContent = text;

  //Append the textbox field into the body as a child. 
  //"execCommand()" only works when there exists selected text, and the text is inside 
  //document.body (meaning the text is part of a valid rendered HTML element).
  document.body.appendChild(copyFrom);

  //Select all the text!
  copyFrom.select();

  //Execute command
  document.execCommand('copy');

  //(Optional) De-select the text using blur(). 
  copyFrom.blur();

  //Remove the textbox field from the document.body, so no other JavaScript nor 
  //other elements can get access to this.
  document.body.removeChild(copyFrom);
}


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var tab = tabs[0];
//     console.log(tab.url, tab.title);
//     chrome.tabs.getSelected(null, function(tab) {
//         chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(msg) {
//             msg = msg || {};
//             console.log('onResponse', msg.farewell);
//         });
//     });
// });
