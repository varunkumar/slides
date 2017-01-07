/*
 * Copyright 2012 The Toolkitchen Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
(function() {

  var thisFile = "mdv.js";

  // if the HTMLElement prototype has addBinding, we should have MDV
  window.hasMDV = Boolean(window.HTMLElement && 
    window.HTMLElement.prototype.addBinding);
  

  // path to this script

  var base = "";
  
  var s$ = document.querySelectorAll('script[src]');
  Array.prototype.forEach.call(s$, function(s) {
    var src = s.getAttribute('src');
    if (src.slice(-thisFile.length) == thisFile) {
      base = src.slice(0, -thisFile.length);
    }
  });
  
  var folder = 'mdv';
  var path = base + folder + '/';

  // Polyfill for object observation
  var files = [
    'src/compat.js',
    'src/side_table.js',
    'third_party/ChangeSummary/change_summary.js',
    'src/model.js',
    '../dirty-check.js'
  ];
  
  // Polyfill for mdv
  if (!hasMDV) {
    // Polyfill user-agent styles for template
    document.write('<link rel="stylesheet" href="' + path + 'src/template_element.css">');
    files = files.concat([
      'src/script_value_binding.js',
      'src/text_replacements_binding.js',
      'src/element_attribute_bindings.js',
      'src/element_bindings.js',
      'src/input_bindings.js',
      'src/template_element.js',
      'src/delegates.js'
    ]);
  }
  
  // Install template decoration API for Components 
  files.push('../template_decorate.js');
  
  files.forEach(function(src) {
    document.write('<script src="' + path + src + '"></script>');
  });
})();