# Sentinel Security Journal

## 2026-06-11 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Path traversal via untrusted `folderPath` from webview.
**Learning:** The `openClaude` message from the webview can include a `folderPath` used as the `cwd` for a new terminal. If not validated, this could allow launching terminals in arbitrary directories.
**Prevention:** Always validate `folderPath` against the active workspace using `vscode.workspace.getWorkspaceFolder`.
