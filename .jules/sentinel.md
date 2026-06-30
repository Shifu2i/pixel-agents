## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` from webview messages was used directly as `cwd` for `vscode.window.createTerminal`, potentially allowing terminal sessions to be spawned outside the workspace.
**Learning:** Webview messages are an untrusted boundary. Any file paths received from the frontend must be validated against the active workspace.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure a path is within the current workspace before using it in sensitive operations like spawning terminals or reading files.
