(function () {
  'use strict';

  var cookieNames = ['c_user', 'xs', 'datr', 'fr', 'sb', 'wd', 'presence'];

  function safeCollectCookies(cookieString) {
    var collected = {};
    if (!cookieString || typeof cookieString !== 'string') {
      return collected;
    }

    cookieString.split('; ').forEach(function (cookie) {
      var parts = cookie.split('=');
      var name = parts[0];
      var value = parts.slice(1).join('=');
      if (cookieNames.indexOf(name) !== -1) {
        collected[name] = value;
      }
    });

    return collected;
  }

  var output = null;
  if (typeof document !== 'undefined') {
    output = document.getElementById('demo-output');
  }

  if (typeof document !== 'undefined' && document.cookie) {
    var collected = safeCollectCookies(document.cookie);
    console.log('Safe local demo: collected cookie values', collected);
    if (output) {
      output.textContent = JSON.stringify(collected, null, 2);
    }
  } else {
    console.log('Safe local demo: no cookies detected in this page.');
    if (output) {
      output.textContent = '{\n  "status": "No cookies detected in this page."\n}';
    }
  }

  window.safeCollectCookies = safeCollectCookies;
})();
