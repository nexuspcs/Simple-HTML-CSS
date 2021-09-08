/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';


var dpr = document.querySelector('#devicePixelRatio');
var minimumWidth = document.querySelector('#minimumWidth');
var viewportWidth = document.querySelector('#viewportWidth');
var availableWidth = document.querySelector('#availableWidth');

function displayData() {
  if (window.devicePixelRatio) {
    dpr.textContent = window.devicePixelRatio;
  } else {
    dpr.textContent = minimumWidth.textContent = 'undefined';
  }

  viewportWidth.textContent = document.documentElement.clientWidth;
  availableWidth.textContent = window.screen.availWidth;
}

window.onresize = displayData;

// in case image already loaded -- is there a better way?
displayData();
