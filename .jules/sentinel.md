# Sentinel Security Journal

## 2025-05-15 - Path Traversal in Terminal Launch
**Vulnerability:** Untrusted `folderPath` from webview message could be used to launch a terminal in any directory.
**Learning:** Webview messages should be treated as untrusted input. `vscode.window.createTerminal` with an arbitrary `cwd` can expose sensitive directories.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` with `vscode.Uri.file(path)` to validate that the provided path belongs to the current workspace before using it as `cwd`.
