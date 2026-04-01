## 2025-03-24 - Webview Content Security Policy (CSP) and Nonce
**Vulnerability:** Missing Content Security Policy (CSP) in VS Code extension webview, which could lead to Cross-Site Scripting (XSS) if untrusted content is rendered.
**Learning:** VS Code webviews should always implement a strict CSP and use cryptographically secure nonces for script injection. Additionally, restricting `localResourceRoots` to the necessary directories (e.g., `dist`) is a key defense-in-depth measure.
**Prevention:** Always inject a CSP `<meta>` tag in the webview HTML and use `crypto.randomBytes(32).toString('base64')` for nonces. Use `asWebviewUri` for all local resources and explicitly define `localResourceRoots` in webview options.
