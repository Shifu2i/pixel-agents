# Sentinel Security Journal

## 2026-05-23 - Path traversal prevention in terminal launches
**Vulnerability:** Path traversal via `folderPath` in `openClaude` message.
**Learning:** Validating `folderPath` against `vscode.workspace.getWorkspaceFolder` is necessary when launching terminals with a user-provided `cwd`.
**Prevention:** Always validate external paths against the active workspace before use.

## 2026-05-23 - Content Security Policy (CSP) for Webviews
**Vulnerability:** Risk of Cross-Site Scripting (XSS) in webviews without a strict CSP.
**Learning:** Webviews must implement a CSP to restrict resource loading. React/Vite apps often require `'unsafe-inline'` for styles due to inline CSS-in-JS or style attributes.
**Prevention:** Inject a `<meta>` CSP tag in the webview HTML, allowing only necessary sources.
