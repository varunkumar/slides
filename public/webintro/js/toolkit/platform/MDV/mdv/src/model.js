// Copyright 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

this.Model = (function() {
  var router = new ChangeSummary();
  var queue = [];
  var notificationQueueIsRunning = false;

  return {
    enqueue: function(func) {
      queue.push(func);
    },

    notifyChanges: function() {
      if (notificationQueueIsRunning)
        return;

      notificationQueueIsRunning = true;
      router.deliver();

      while (queue.length > 0) {
        var f = queue.shift();
        f();
      }

      notificationQueueIsRunning = false;
    },

    getValueAtPath: ChangeSummary.getValueAtPath,
    setValueAtPath: ChangeSummary.setValueAtPath,
    observeObject: router.observePropertySet.bind(router),
    unobserveObject: router.unobservePropertySet.bind(router),
    observeArray: router.observePropertySet.bind(router),
    unobserveArray: router.unobservePropertySet.bind(router),
    observePath: router.observePathValue.bind(router),
    unobservePath: router.unobservePathValue.bind(router)
  };
})();
