// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

console.log('Hello, World!');
document.getElementById('regButton').addEventListener('click', function () {
  var field = document.createElement('input'); // INPUT also works
  field.setAttribute('type', 'text');
  field.setAttribute('name', 'text');
  document.body.appendChild(field);
  document.body.appendChild(document.createElement("br"));
});
