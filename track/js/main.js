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

var videoElement = document.querySelector('video');
var textTrack = videoElement.textTracks[0]; // there's only one!

var data = document.getElementById('data');
textTrack.oncuechange = function() {
  // 'this' is a textTrack
  var cue = this.activeCues[0]; // assuming there is only one active cue
  if (cue) {
    data.innerHTML = cue.startTime + '-' + cue.endTime + ': ' + cue.text +
      '<br />' + data.innerHTML;
    //  var obj = JSON.parse(cue.text); // cues can be data too :)
  }
};
