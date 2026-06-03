## 2026-06-02 - Folder Path Traversal Prevention
**Vulnerability:** Path traversal risk when launching a new terminal with a `folderPath` received from the webview.
**Learning:** Webview messages can be manipulated; any path used for filesystem or terminal operations must be validated against the active workspace.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` with the provided path to ensure it belongs to the current workspace before using it as a `cwd` for a terminal.
