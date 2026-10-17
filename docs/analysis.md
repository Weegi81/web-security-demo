# Analysis of Malicious Cookie-Exfiltration Scripts (High-level)

This document explains at a high level how JavaScript-based cookie-exfiltration scripts operate and why they are malicious. It intentionally avoids providing step-by-step exploit code.

Overview
- Attack goal: an attacker who can run arbitrary JavaScript in a victim's browser (for example via Cross-Site Scripting, or XSS) may attempt to read cookies or local storage and send them to an attacker-controlled server. Those cookies may include session tokens that allow account takeover.

How attackers typically get code to run
- Reflected XSS: attacker crafts a URL that causes a vulnerable page to include attacker-controlled script in the response.
- Stored XSS: attacker stores payloads (e.g., in comments, messages) that other users load later.
- Third-party script compromise or malicious browser extension that injects scripts into pages.

What a malicious script tries to access
- document.cookie: readable unless the cookie has the HttpOnly flag set.
- localStorage/sessionStorage: can contain tokens or sensitive data that client code stored.
- DOM elements containing sensitive data (e.g., hidden inputs).

Why HttpOnly matters
- Cookies set with the HttpOnly attribute are not accessible to JavaScript running in the page. This prevents many common cookie-theft techniques.

Why network exfiltration is dangerous
- Exfiltration sends data to attacker-controlled endpoints (beacons, image requests, fetch/XHR). Once captured, session tokens can be reused to impersonate users.

Defensive focus
- The right mitigations greatly reduce the attack surface: prevent arbitrary JS execution (XSS protections), restrict cookie access (HttpOnly), and harden session handling (short-lived tokens, rotation).

Legal and ethical note
- Creating or distributing working cookie-exfiltration tools is malicious and may be illegal. This repository is for defensive education only and intentionally omits exploit-ready code.
