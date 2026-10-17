# Practical Mitigations and Hardening Guidance

This file lists practical steps developers and operators can take to prevent cookie theft and mitigate XSS risks.

Cookie hardening
- HttpOnly: mark authentication/session cookies with HttpOnly so JS cannot read them.
- Secure: mark cookies Secure so they are only sent over HTTPS.
- SameSite: use SameSite=Lax or SameSite=Strict to reduce cross-site request risks.
- Minimal scope: set Host/Domain and Path attributes to limit cookie exposure.
- Short lifetime & rotation: issue short-lived session tokens and rotate them on privilege changes.

XSS and script injection defenses
- Output encoding: always escape user-controlled data when inserting into HTML, attributes, or JavaScript contexts.
- Content Security Policy (CSP): deploy a strict CSP that restricts script sources and disables unsafe-eval/unsafe-inline where possible.
- Input validation: validate and sanitize input on the server side; use CSP and proper encoding as a defense-in-depth.
- Use templating frameworks that auto-escape by default.

Other server-side/session best practices
- Use same-origin checks and CSRF protections for state-changing endpoints.
- Bind sessions to additional context (IP range, user agent) where appropriate, but be careful of false positives.
- Monitor for anomalous session use and implement token revocation/rotation flows.

Operational
- Audit third-party scripts and dependencies before including them.
- Run security scanning and periodic pentesting for XSS vectors.
- Implement logging/alerting for suspicious activity (e.g., session reuse from unexpected locations).

Resources
- OWASP XSS Prevention Cheat Sheet: https://owasp.org/www-community/xss
- OWASP Session Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
