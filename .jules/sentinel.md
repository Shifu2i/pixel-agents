## 2026-03-28 - [Path Traversal in Terminal Launch]
**Vulnerability:** The `openClaude` webview message allowed launching a terminal in any arbitrary `folderPath` provided by the webview, potentially leading to command execution in sensitive directories outside the workspace.
**Learning:** Webview messages should never be trusted for filesystem paths without validation against the active workspace folders.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to validate that any path received from the webview resides within the current workspace before using it as a `cwd` for terminals or processes.

## 2026-03-28 - [Missing Content Security Policy]
**Vulnerability:** The extension webview lacked a Content Security Policy (CSP), making it vulnerable to Cross-Site Scripting (XSS) if any untrusted content were to be rendered.
**Learning:** Even if no user input is currently rendered, a CSP is a vital "defense in depth" measure for all VS Code webviews.
**Prevention:** Always implement a strict CSP that uses nonces for scripts and restricts resources to `webview.cspSource`.
