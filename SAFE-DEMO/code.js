// SAFE DEMO ONLY — does NOT exfiltrate data
// This script simulates cookie-reading behavior but ONLY logs results locally.
// DO NOT use this for any malicious purpose.

(function() {
  'use strict';

  // Example cookie names (for demonstration only)
  var fbCookies = ['c_user', 'xs', 'datr', 'fr', 'sb', 'wd', 'presence'];
  var collected = {};

  // Parse cookies (works only on pages where cookies are accessible)
  if (typeof document !== 'undefined' && document.cookie) {
    document.cookie.split('; ').forEach(function(c) {
      var parts = c.split('=');
      var name = parts[0];
      var value = parts.slice(1).join('=');
      if (fbCookies.includes(name)) {
        collected[name] = value;
      }
    });
  }

  // SAFE: only log to the console for demonstration — NO network calls
  console.log('SIMULATED collected cookies (demo only):', collected);

  // Guidance output for learners
  console.log('This is a harmless demo. To prevent attackers from doing this in real apps:');
  console.log('- Mark session cookies HttpOnly and Secure.');
  console.log('- Use SameSite=strict or SameSite=lax where appropriate.');
  console.log('- Apply Content Security Policy (CSP) and sanitize inputs to prevent XSS.');
  console.log('- Prefer server-side session handling and rotate tokens on privilege changes.');
})();
