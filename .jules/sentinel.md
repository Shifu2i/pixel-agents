# Sentinel Security Journal

## 2025-05-15 - Missing Webview CSP and Path Traversal risk in Terminal Launch
**Vulnerability:** The webview lacked a Content Security Policy (CSP), making it vulnerable to XSS if untrusted content was rendered. Additionally, terminal launching from the webview allowed arbitrary directory paths, posing a path traversal risk.
**Learning:** Webviews in VS Code should always have a strict CSP with a nonce-based script-src. Any filesystem path received from the webview must be validated against the active workspace folders.
**Prevention:** Always implement CSP in `resolveWebviewView` and validate all paths received via `onDidReceiveMessage` using `vscode.workspace.getWorkspaceFolder`.
