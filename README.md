# web-security-demo

This repository is a safe, educational demonstration of browser security concepts related to cookies, XSS risks, and defensive hardening.

Overview
- The repository intentionally avoids malicious or exploit-ready code.
- It demonstrates how cookie reading can become dangerous when JavaScript runs in an unsafe context.
- It focuses on prevention, detection, and secure practices.

Included
- README.md — project overview and usage notes.
- SAFE-DEMO/code.js — harmless local-only demonstration.
- docs/analysis.md — high-level explanation of how malicious cookie theft works.
- docs/mitigations.md — concrete defense recommendations.
- docs/index.html — GitHub Pages-style landing page for the project.
- docs/styles.css — styling for the landing page.
- assets/demo.js — browser demo that safely logs cookie data locally.
- tests/safe_demo_test.js — a smoke test for the demo script.

Local preview
1. Download or clone the repository.
2. Open docs/index.html in a browser.
3. Or run the smoke test:
   npm test -- --runInBand
   (if you add a package.json in the future)

Security note
This repository is for defensive learning only. It does not include working exfiltration payloads, does not send anything to a remote server, and is not intended for unauthorized or illegal use.

License
MIT License.
