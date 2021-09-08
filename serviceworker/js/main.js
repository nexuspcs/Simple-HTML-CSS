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

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported :^)');
  // scope and URLs are relative to index.html
  navigator.serviceWorker.register('sw.js').then(function(registrationObject) {
    console.log('Registration succeeded', registrationObject);
  }).catch(function(error) {
    console.log('Registration failed — make sure to run via HTTPS or localhost',
      error);
  });
} else {
  console.log('Service Worker is not supported :^(');
}

