## 2025-05-15 - [Path Traversal in Terminal Launch]
**Vulnerability:** The extension allowed launching a terminal in an arbitrary directory provided by the webview via the `openClaude` message, leading to potential path traversal risks.
**Learning:** Webview messages are untrusted and any paths received from them must be validated against the current workspace to ensure they don't target sensitive areas of the filesystem.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to verify that a path provided by the webview is within one of the open workspace folders before using it as a `cwd` for a terminal or process.

## 2025-05-15 - [Missing Content Security Policy in Webview]
**Vulnerability:** The webview lacked a Content Security Policy (CSP), making it vulnerable to Cross-Site Scripting (XSS) if an attacker could inject malicious scripts or resources.
**Learning:** VS Code webviews should always implement a strict CSP to follow the principle of least privilege for resource loading and script execution.
**Prevention:** Implement a nonce-based CSP in the webview's HTML, generated on the extension host, and apply the nonce to all script tags. Restrict `default-src` to 'none' and explicitly allow necessary sources for styles and images.
