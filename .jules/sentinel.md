# Sentinel Security Journal

## 2026-06-02 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The `openClaude` message from the webview allowed an arbitrary `folderPath` to be passed to `vscode.window.createTerminal`, which could lead to path traversal or launching terminals in sensitive directories if the webview was compromised.
**Learning:** Webview messages should always be treated as untrusted. Any file paths provided by the frontend must be validated against the active workspace folders before being used in backend operations.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure a provided path belongs to the current workspace. If validation fails, default to a safe path (like the first workspace folder) and notify the user.
