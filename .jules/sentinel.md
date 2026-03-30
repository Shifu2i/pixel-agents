# Sentinel Security Journal

## 2026-03-30 - Webview Content Security Policy (CSP)
**Vulnerability:** Lack of Content Security Policy (CSP) in the webview made the extension vulnerable to Cross-Site Scripting (XSS) if untrusted content was ever rendered.
**Learning:** VS Code webviews require a strict CSP to mitigate XSS risks. Using a cryptographically secure nonce for scripts and restricting resource origins (using `webview.cspSource`) is the recommended defense-in-depth approach.
**Prevention:** Always implement a strict CSP for any new webviews. Use nonces for scripts and avoid `'unsafe-inline'` for scripts. For styles, `'unsafe-inline'` may be necessary for some React/Vite setups but should be limited to `webview.cspSource`.
