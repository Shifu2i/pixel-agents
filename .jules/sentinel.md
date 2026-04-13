## 2026-04-09 - Path Traversal in Terminal Launch
**Vulnerability:** The extension allowed launching a terminal in any arbitrary path provided by the webview via the `openClaude` message.
**Learning:** Webview messages should be treated as untrusted input. Directly using a path from a message as the `cwd` for a terminal can lead to path traversal or workspace escape.
**Prevention:** Always validate paths received from the webview against the current workspace using `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))`.
