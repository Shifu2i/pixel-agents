## 2026-04-20 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The extension could be tricked into launching a terminal in an arbitrary directory outside the workspace via a `folderPath` parameter in an `openClaude` message from the webview.
**Learning:** Webview messages are untrusted. Even if the UI only sends valid workspace paths, a malicious actor (or a bug) could send a crafted path like `/etc` or `../../secret`.
**Prevention:** Always validate any folder paths received from the webview against `vscode.workspace.workspaceFolders` (e.g., using `vscode.workspace.getWorkspaceFolder`) before using them as a `cwd` for terminals or file operations.
