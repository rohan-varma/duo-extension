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
	var div = document.createElement('div');
	div.setAttribute("id", "CodeDiv");
	div.innerHTML = "Your codes are: ";
	// get codes from local storage
	chrome.storage.sync.get("codes", function(result) {
		if(result !== null && result.codes !== null) {
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
  	genCodes(newCodes);
  }

})
