## 2026-06-02 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Untrusted `folderPath` from webview messages was used directly as `cwd` for `vscode.window.createTerminal`, potentially allowing an attacker to launch terminals in arbitrary directories outside the workspace.
**Learning:** VS Code webviews can send arbitrary messages. Any file system paths received must be validated against the active workspace to prevent path traversal or unauthorized access.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure a provided path belongs to the current workspace before using it for terminal launches or file operations.
