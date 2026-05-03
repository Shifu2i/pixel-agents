## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` to the extension via the `openClaude` message, which was used as the `cwd` for a new terminal without validation.
**Learning:** Even internal messages between webview and extension must be treated as untrusted input if they originate from user-controlled UI elements or can be spoofed.
**Prevention:** Always validate paths received from the webview against the active workspace using `vscode.workspace.getWorkspaceFolder`.
