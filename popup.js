// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


function genCodes(newCodes) {

	// save newCodes.
	chrome.storage.sync.set({"codes": newCodes, function() {}});
	// update codes in screen.
	var div = document.getElementById('CodeDiv');
	div.innerHTML = "Your codes are: ";
	div.innerHTML += newCodes;
	document.body.appendChild(div);
}
document.addEventListener('DOMContentLoaded', function() {
	// const k = document.getElementsByClassName('passcode-input')
	// if (k !== null) {
	// 	alert(JSON.stringify(k, null, 2));
	// }
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
			document.body.appendChild(div);
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
