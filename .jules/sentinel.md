# Sentinel Security Journal

## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** New terminals were launched using a `folderPath` received directly from the webview without validation. This could allow the webview (if compromised) to launch terminals in arbitrary directories on the user's filesystem.
**Learning:** Even if a webview is trusted, any path information it sends that is used for filesystem or terminal operations should be validated against the current workspace to ensure it remains within expected boundaries.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to verify that a path belongs to one of the currently open workspace folders before using it as a `cwd` for a terminal.
